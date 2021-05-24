import React, { useCallback, useRef } from 'react';
import { FiMail, FiX } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Input from '../Input';
import Button from '../Button';
import getValidationErrors from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/toast';

import { Container, Content } from './styles';

interface IForm {
  email: string;
}

interface IProps {
  close(): void;
}

const SignIn: React.FC<IProps> = ({ close }) => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: IForm) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        addToast({
          type: 'success',
          title: 'Inscrição realizada com sucesso',
          description: 'Você irá receber notificas em seu e-mail',
        });
        close();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else
          addToast({
            type: 'error',
            title: 'Erro ao fazer a inscrição',
            description: 'Ocorreu um erro inesperado.',
          });
      }
    },
    [addToast, close],
  );

  return (
    <Container id="modal">
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Informe seu e-mail para acompanhar as notificas</h2>

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Button type="submit">Inscrever-me</Button>
        </Form>
        <button className="close" type="button" onClick={close}>
          <FiX size={20} />
        </button>
      </Content>
    </Container>
  );
};

export default SignIn;
