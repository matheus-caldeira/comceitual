const rand = (max: number, min = 0) =>
  parseInt((Math.random() * (max - min) + min).toFixed(0), 10);
function array(qty: any, max: number, min = 0) {
  const newArray = new Array(parseInt(qty, 10) + 1).fill(1);
  return newArray.map(() => rand(max, min));
}

export const ongs = [
  {
    id: 0,
    name: 'Sol',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    types: ['Infantil', 'violencia', 'Drogas'],
    image:
      'https://images.unsplash.com/photo-1615150338956-542fc878f7e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80',
  },
  {
    id: 1,
    name: 'Lua',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    types: ['Infantil', 'violencia', 'Drogas'],
    image:
      'https://images.unsplash.com/photo-1615150338956-542fc878f7e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80',
  },
  {
    id: 2,
    name: 'Casa',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    types: ['Infantil', 'violencia', 'Drogas'],
    image:
      'https://images.unsplash.com/photo-1615150338956-542fc878f7e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80',
  },
];

export const photos = [
  'https://images.unsplash.com/photo-1615150338956-542fc878f7e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80',
  'https://images.unsplash.com/photo-1615150338956-542fc878f7e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80',
  'https://images.unsplash.com/photo-1615150338956-542fc878f7e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80',
  'https://images.unsplash.com/photo-1615150338956-542fc878f7e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80',
  'https://images.unsplash.com/photo-1615150338956-542fc878f7e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80',
  'https://images.unsplash.com/photo-1615150338956-542fc878f7e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80',
];

export const projects = [
  {
    id: 0,
    name: 'Projeto - Sol',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    types: ['Infantil', 'violencia', 'Drogas'],
    image:
      'https://images.unsplash.com/photo-1615150338956-542fc878f7e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80',
  },
  {
    id: 1,
    name: 'Projeto - Lua',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    types: ['Infantil', 'violencia', 'Drogas'],
    image:
      'https://images.unsplash.com/photo-1615150338956-542fc878f7e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80',
  },
  {
    id: 2,
    name: 'Projeto - Casa',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    types: ['Infantil', 'violencia', 'Drogas'],
    image:
      'https://images.unsplash.com/photo-1615150338956-542fc878f7e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80',
  },
];

export const graphDatas = [
  {
    id: 0,
    name: 'Novo alunos',
    data: array(rand(30, 5), 50),
  },
  {
    id: 1,
    name: 'Desistência de alunos',
    data: array(rand(30, 5), 50),
  },
  {
    id: 2,
    name: 'Custos',
    data: array(rand(30, 5), 1000),
  },
  {
    id: 3,
    name: 'Voluntários',
    data: array(rand(30, 5), 50),
  },
  {
    id: 4,
    name: 'Quantidade de Doações',
    data: array(rand(30, 5), 50),
  },
];

export const graphBorder = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(74, 129, 122, 1)',
];

export const graphColor = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)',
  'rgba(74, 129, 122, 0.2)',
];

export const graphOptions = {
  responsive: true,
  legend: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export const graphBar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: 'Custos',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      fill: false,
      data: array(rand(30, 5), 1000),
    },
    {
      type: 'bar',
      label: 'Entrada de alunos',
      backgroundColor: 'rgb(255, 99, 132)',
      data: array(rand(30, 5), 100),
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Saida de alunos',
      backgroundColor: 'rgb(75, 192, 192)',
      data: array(rand(30, 5), 100),
    },
  ],
};

export const graphRadar = {
  data: {
    labels: [
      'Gestão de pessoa',
      'Gestão de voluntário',
      'Gestão de comunicação',
      'Gestão de doadores',
      'gestão de serviços',
    ],
    datasets: [
      {
        label: 'Resumo',
        data: array(5, 100, 50),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  },
  options: {
    scale: {
      ticks: { beginAtZero: true },
    },
  },
};
