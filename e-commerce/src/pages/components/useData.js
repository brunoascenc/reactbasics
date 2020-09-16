import React, {createContext, useState} from 'react';

export const DataContext = createContext()


const useData = (props) => {
  const [products, setProducts] = useState([
    {
      id: "0",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-591c9c9f-iphone7-black-1.jpg",
      titulo: "iPhone 7 Plus Preto Matte",
      preco: "1899,90",
      parcela: "ou 12x de R$ 59,99 sem juros",
      tituloDetalhe: "iPhone 7 Plus 32GB Preto Matte Desbloqueado IOS 10",
      marca: "Apple",
      modelo: "iPhone 7",
      cor: "Preto",
      chip: "Nano Chip",
      qtd_chip: "Single Chip",
      memoria_interna: "32GB",
      memoria_ram: "2GB",
      processador: "A10",
      sistema: "Iphone IOS",
      versao: "IOS 10",
      tipo_tela: "Retina Display",
      tamanho_display: "4.7'",
      resolucao: "1334 x 750 pixels, 326 ppp",
      camera_traseira: "12MP",
      camera_frontal: "7MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-58ab0bac-iphone7-black-2.jpg",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-58ab0bad-iphone7-black-3.jpg",
    },

    {
      id: "1",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-5ab2a7f1-iphone-x-cinzaespacial-frente.png",
      titulo: "Iphone X Cinza Espacial",
      preco: "2000,00",
      parcela: "ou 12X de 49,60 sem juros",
      tituloDetalhe: "iPhone X Cinza Espacial 64GB Tela 5.8",
      marca: "Apple",
      modelo: "Iphone X Space Gray 64GB-BRA",
      cor: "Cinza",
      chip: "Nano Chip",
      qtd_chip: "Single Chip",
      memoria_interna: "64GB",
      memoria_ram: "2GB",
      processador: "A11 Bionic com arquitetura de 64 bits",
      sistema: "Iphone IOS",
      versao: "11",
      tipo_tela: "oled",
      tamanho_display: "5.8'",
      resolucao: "Resolução de 2436 x 1125 pixels a 458 ppp",
      camera_traseira: "12MP",
      camera_frontal: "7MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-5ab2a7f1-iphone-x-cinzaespacial-perfil.png",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-5ab2a7f2-iphone-x-cinzaespacial-traseira.png",
    },

    {
      id: "2",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-motorola-moto-maxx-2-64gb.jpg",
      titulo: "Motorola Moto Maxx 2 64gb",
      preco: "2000,00",
      parcela: "ou 12x R$ 49,90 sem juros",
      tituloDetalhe: "Motorola Moto Maxx 2 64gb",
      marca: "Motorola",
      modelo: "Moto Maxx",
      cor: "Preto",
      chip: "Nano Chip",
      qtd_chip: "Single Chip",
      memoria_interna: "64GB",
      memoria_ram: "3GB",
      processador: "Snapdragon 805 Qualcomm APQ8084",
      sistema: "Android",
      versao: "4.4.4 KitKat",
      tipo_tela: "AMOLED",
      tamanho_display: "5.2'",
      resolucao: "1440 x 2560 pixel",
      camera_traseira: "21MP",
      camera_frontal: "2MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-moto-maxx-2a-g-2.png",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-moto-maxx-2a-g-3.png",
    },

    {
      id: "3",
      imagem: "https://imagens.trocafone.com/images/phones/dt-s8-preto-1.jpg",
      titulo: "Samsung Galaxy S8 Plus",
      preco: "1970,90",
      parcela: "ou 12x R$ 50,90 sem juros",
      tituloDetalhe: "Samsung Galaxy S8 Plus 64GB",
      marca: "Samsung",
      modelo: "Galaxy S8 Plus",
      cor: "Preto",
      chip: "Dois chips",
      memoria_interna: "64GB",
      memoria_ram: "4 GB / 6 GB",
      processador: "Octa-core 2.3 GHz + 1.7 GHz",
      sistema: "Android",
      versao: "4.4.4 KitKat",
      tipo_tela: "AMOLED",
      tamanho_display: "6.2'",
      resolucao: "2960 x 1440 pixels",
      camera_traseira: "12 MP",
      camera_frontal: "8 MP",
      lado: "https://imagens.trocafone.com/images/phones/dt-s8-preto-2.jpg",
      traseira: "https://imagens.trocafone.com/images/phones/dt-s8-preto-3.jpg",
    },

    {
      id: "4",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-5979f872-moto-g5-plus-platinum-1.jpg",
      titulo: "Motorola Moto G5 Plus",
      preco: "859,90",
      parcela: "ou 12x R$ 39,90 sem juros",
      tituloDetalhe: "Motorola Moto G 5S Dual Chip Android 7.1.1 Nougat",
      marca: "Motorola",
      modelo: "Moto G 5S",
      cor: "Platinum",
      chip: "Nano Chip",
      qtd_chip: "Dual Chip",
      memoria_interna: "32GB",
      memoria_ram: "2GB",
      processador: "Snapdradon 430",
      sistema: "Android",
      versao: "7.1.1 Nougat",
      tipo_tela: "LCD IPS",
      tamanho_display: "5.2'",
      resolucao: "Full HD - 1920x1080",
      camera_traseira: "16MP",
      camera_frontal: "5MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-moto-g5-plus-platinum-2.jpg",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-moto-g5-plus-platinum-3.jpg",
    },

    {
      id: "5",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-s7-edge-dourado-1.png",
      titulo: "Samsung Galaxy S7 Edge",
      preco: "1689,99",
      parcela: "ou R$ 65,60 sem juros",
      tituloDetalhe: "Smartphone Samsung Galaxy S7 Edge Android 6.0",
      marca: "Samsung",
      modelo: "Galaxy S7 Edge",
      cor: "Dourado",
      chip: "Nano Chip",
      qtd_chip: "Single Chip",
      memoria_interna: "32GB",
      memoria_ram: "4GB",
      processador: "Octa-Core 2.3GHz + 1.6GHz",
      sistema: "Android",
      versao: "Android 6.0",
      tipo_tela: "Super AMOLED",
      tamanho_display: "5.5'",
      resolucao: "2560x1440 (Quad HD)",
      camera_traseira: "12MP",
      camera_frontal: "5MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-s7-edge-dourado-3.png",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-s7-edge-dourado-4.png",
    },

    {
      id: "7",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-motorola-moto-x-style-32gb-preto.png",
      titulo: "Motorola Moto X Style",
      preco: "2000,00",
      parcela: "ou 12x R$ 49,90 sem juros",
      tituloDetalhe: "Moto X Style Xt1572 32gb Preto",
      marca: "Motorola",
      modelo: "Moto X",
      cor: "Preto",
      chip: "Nano Chip",
      qtd_chip: "Single Chip",
      memoria_interna: "32GB",
      memoria_ram: "3GB",
      processador: "Dual-core 1.8 GHz Cortex-A57",
      sistema: "Android",
      versao: "5.1.1 Lollipop",
      tipo_tela: "TFT LCD",
      tamanho_display: "5.7'",
      resolucao: "1440 x 2560 pixel",
      camera_traseira: "12MP",
      camera_frontal: "2MP",
      lado: "https://imagens.trocafone.com/images/phones/dt-x-style-pret-2.png",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-x-style-pret-3.png",
    },

    {
      id: "8",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-galaxy-s6-flat-bran-1.png",
      titulo: "Samsung Galaxy S6 Flat",
      preco: "659,00",
      parcela: "ou 12x R$ 25,90 sem juros",
      tituloDetalhe: "Samsung Galaxy S6 Flat Branco",
      marca: "Samsung",
      modelo: "Galaxy S6 Flat",
      cor: "Branco",
      chip: "Nano Chip",
      qtd_chip: "Single Chip",
      memoria_interna: "32GB",
      memoria_ram: "3GB",
      processador: "Octa-Core 1.5 GHz + 2.1 GHz",
      sistema: "Android",
      versao: "5.1.1 Lollipop",
      tipo_tela: "TFT LCD",
      tamanho_display: "5.1'",
      resolucao: "1440 x 2560 pixels",
      camera_traseira: "12MP",
      camera_frontal: "2MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-galaxy-s6-flat-bran-2.png",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-galaxy-s6-flat-bran-3.png",
    },

    {
      id: "9",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-5b3134b3-zenfone-4-verde-frente.png",
      titulo: "Zenfone 4 Verde",
      preco: "1659,55",
      parcela: "ou 12x R$ 49,90 sem juros",
      tituloDetalhe: "Zenfone 4 4GB Ram Verde",
      marca: "Asus",
      modelo: "Zenfone 4",
      cor: "Verde",
      chip: "Nano Chip",
      qtd_chip: "Single Chip",
      memoria_interna: "8GB",
      memoria_ram: "4GB",
      processador: "QUALCOMM SNAPDRAGON SDN630 2,2 GHz, 2 MB Cache",
      sistema: "Android",
      versao: "7",
      tipo_tela: "AMOLED",
      tamanho_display: "5.5'",
      resolucao: "1440 x 2560 pixel",
      camera_traseira: "12 + 8MP (Dual Traseira)",
      camera_frontal: "8MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-5b3134b4-zenfone-4-verde-perfil.png",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-5b3134b5-zenfone-4-verde-traseira.png",
    },

    {
      id: "10",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-zenfone-4-selfie-pro-vermelho-frente.png",
      titulo: "Zenfone 4 Selfie Pro",
      preco: "1789,00",
      parcela: "ou 12x R$ 69,99 sem juros",
      tituloDetalhe: "Zenfone 4 Selfie Pro 4GB Ram Vermelho",
      marca: "Asus",
      modelo: "Zenfone 4",
      cor: "Vermelho",
      chip: "Nano Chip",
      qtd_chip: "Single Chip",
      memoria_interna: "16GB",
      memoria_ram: "4GB",
      processador: "QUALCOMM SNAPDRAGON SDN630 2,2 GHz, 2 MB Cache",
      sistema: "Android",
      versao: "7",
      tipo_tela: "AMOLED",
      tamanho_display: "5.5'",
      resolucao: "1440 x 2560 pixel",
      camera_traseira: "18 + 8MP (Dual Traseira)",
      camera_frontal: "8MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-zenfone-4-selfie-pro-vermelho-perfil.png",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-zenfone-4-selfie-pro-vermelho-traseira.png",
    },

    {
      id: "11",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-5a5f3e54-zenfone-3-preto-1.jpg",
      titulo: "Zenfone 3 Preto",
      preco: "1289,66",
      parcela: "ou 12x R$ 45,60 sem juros",
      tituloDetalhe: "Smartphone Asus Zenfone 3 Dual Chip ",
      marca: "Asus",
      modelo: "ZE520KL-1A090BR",
      cor: "Preto",
      chip: "Micro Chip",
      qtd_chip: "Dual Chip",
      memoria_interna: "16GB",
      memoria_ram: "2GB",
      processador: "Qualcomm Snapdragon 625 Octa-core 2.0 GHz",
      sistema: "Android",
      versao: "6",
      tipo_tela: "LCD IPS",
      tamanho_display: "5.2'",
      resolucao: "1920x1080",
      camera_traseira: "16MP",
      camera_frontal: "8MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-5aa96fd9-zenfone-3-preto-2.jpg",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-5aa96fd9-zenfone-3-preto-3.jpg",
    },

    {
      id: "12",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-5834762a-cinza-e-frente.png",
      titulo: "Iphone 6S Cinza Espacial",
      preco: "1599,90",
      parcela: "ou 12X de R$ 50,00 sem juros",
      tituloDetalhe: "iPhone 6s 32GB Cinza Tela Retina HD 4,7",
      marca: "Apple",
      modelo: "iPhone 6s",
      cor: "Cinza",
      chip: "Nano Chip",
      qtd_chip: "Single Chip",
      memoria_interna: "32GB",
      memoria_ram: "2GB",
      processador: "A9 com arquitetura de 64 bit",
      sistema: "Iphone IOS",
      versao: "iOS 11",
      tipo_tela: "Retina Display",
      tamanho_display: "4.7'",
      resolucao: "Resolução de 1334 x 750 pixels, 326 ppp",
      camera_traseira: "12MP",
      camera_frontal: "5MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-58347a09-cinza-e-lado.png",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-58347a0a-cinza-e-traseira.png",
    },

    {
      id: "13",
      imagem: "https://imagens.trocafone.com/images/phones/dt-prata-frente.jpg",
      titulo: "Iphone SE Prata",
      preco: "1259,99",
      parcela: "ou 12x de R$ 39,90 sem juros",
      tituloDetalhe: "iPhone SE 32GB Prata IOS 4G Câmera 12MP - Apple",
      marca: "Apple",
      modelo: "iPhone SE",
      cor: "Branco",
      chip: "Nano Chip",
      qtd_chip: "Single Chip",
      memoria_interna: "32GB",
      memoria_ram: "2GB",
      processador: "A9",
      sistema: "Iphone IOS",
      versao: "iOS 10",
      tipo_tela: "Retina Display",
      tamanho_display: "4'",
      resolucao: "1136 x 640 pixel",
      camera_traseira: "12MP",
      camera_frontal: "1.2MP",
      lado: "https://imagens.trocafone.com/images/phones/dt-prata-lado.jpg",
      traseira: "https://imagens.trocafone.com/images/phones/dt-prata-tras.jpg",
    },

    {
      id: "14",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-5834535c-cinza-e-frente.png",
      titulo: "Iphone 5S Cinza Espacal",
      preco: "1199,56",
      parcela: "ou 12x de R$ 29,99 sem juros",
      tituloDetalhe: "iPhone 5s Apple 16gb Cinza Espacial ",
      marca: "Apple",
      modelo: "iPhone 5s",
      cor: "Cinza",
      chip: "Nano Chip",
      qtd_chip: "Single Chip",
      memoria_interna: "64GB",
      memoria_ram: "1GB",
      processador: "1.3 GHz Dual Core",
      sistema: "Iphone IOS",
      versao: "iOS 12",
      tipo_tela: "IPS LCD",
      tamanho_display: "4'",
      resolucao: "640 x 1136 pixel",
      camera_traseira: "8MP",
      camera_frontal: "1.2MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-58bd690f-cinza-e-lado.png",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-58bd6910-cinza-e-traseira.png",
    },

    {
      id: "15",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-iphone-5s-16gb-dourado.png",
      titulo: "Iphone 5S 16GB Dourado",
      preco: "999,00",
      parcela: "ou 12x de R$ 56,90 sem juros",
      tituloDetalhe: "iPhone 5s Apple 16gb Dourado",
      marca: "Apple",
      modelo: "iPhone 5s",
      cor: "Dourado",
      chip: "Nano Chip",
      qtd_chip: "Single Chip",
      memoria_interna: "64GB",
      memoria_ram: "1GB",
      processador: "1.3 GHz Dual Core",
      sistema: "Iphone IOS",
      versao: "iOS 12",
      tipo_tela: "IPS LCD",
      tamanho_display: "4'",
      resolucao: "640 x 1136 pixel",
      camera_traseira: "8MP",
      camera_frontal: "1.2MP",
      lado: "https://imagens.trocafone.com/images/phones/dt-dourado-lado.png",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-dourado-traseira.png",
    },

    {
      id: "16",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-58344fcb-branco-frente.png",
      titulo: "iPhone 5C 8GB Branco",
      preco: "509,00",
      parcela: "ou 12x de R$ 29,23 sem juros",
      tituloDetalhe: "Iphone 5c 8gb Branco",
      marca: "Apple",
      modelo: "iPhone 5c",
      cor: "Branco",
      chip: "Nano Chip",
      qtd_chip: "Single Chip",
      memoria_interna: "64GB",
      memoria_ram: "1GB",
      processador: "1.3 GHz Dual Core",
      sistema: "Iphone IOS",
      versao: "iOS 12",
      tipo_tela: "IPS LCD",
      tamanho_display: "4'",
      resolucao: "640 x 1136 pixel",
      camera_traseira: "8MP",
      camera_frontal: "1.2MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-58344fcc-branco-lado.png",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-58344fcd-branco-traseira.png",
    },

    {
      id: "17",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-58347a07-cinza-e-frente.png",
      titulo: "iPhone 6S Plus Cinza",
      preco: "1754,00",
      parcela: "ou 12x de R$ 39,99 sem juros",
      tituloDetalhe: "iPhone 6s Plus 32GB Cinza Tela Retina HD 4,7",
      marca: "Apple",
      modelo: "iPhone 6s",
      cor: "Cinza",
      chip: "Nano Chip",
      qtd_chip: "Single Chip",
      memoria_interna: "32GB",
      memoria_ram: "2GB",
      processador: "A9 com arquitetura de 64 bit",
      sistema: "Iphone IOS",
      versao: "iOS 11",
      tipo_tela: "Retina Display",
      tamanho_display: "5.1'",
      resolucao: "Resolução de 1334 x 750 pixels, 326 ppp",
      camera_traseira: "12MP",
      camera_frontal: "5MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-58347a09-cinza-e-lado.png",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-58347a0a-cinza-e-traseira.png",
    },
    {
      id: "18",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-5c23a990-zenfone-4-max-preto-frente.png",
      titulo: "Asus Zenfone 4 Max Preto",
      preco: "1989,56",
      parcela: "ou 12x R$ 89,90 sem juros",
      tituloDetalhe: "Asus Zenfone 4 Max Dual Chip Android 7",
      marca: "Asus",
      modelo: "Zenfone 4",
      cor: "Preto",
      chip: "Nano Chip",
      qtd_chip: "Dual Chip",
      memoria_interna: "32GB",
      memoria_ram: "3GB",
      processador: "Qualcomm Snapdragon 8937 1,4 Ghz 2 Mb Cache",
      sistema: "Android",
      versao: "7",
      tipo_tela: "LED IPS",
      tamanho_display: "5.5'",
      resolucao: "1280x720",
      camera_traseira: "13 + 5MP (Dual Traseira)",
      camera_frontal: "8MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-5c23a991-zenfone-4-max-preto-perfil.png",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-5c23a991-zenfone-4-max-preto-traseira.png",
    },
    {
      id: "19",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-5c1148d1-moto-g-3a-geracao-16gb-4g-dual-preto.png",
      titulo: "Moto G3 Geração",
      preco: "1200,00",
      parcela: "ou 12x R$ 55,96 sem juros",
      tituloDetalhe: "Moto G3 Motorola Xt1543 16gb Preto",
      marca: "Motorola",
      modelo: "Moto G",
      cor: "Preto",
      chip: "Nano Chip",
      qtd_chip: "Single Chip",
      memoria_interna: "16GB",
      memoria_ram: "1GB",
      processador: "Dual-core 1.8 GHz Cortex-A57",
      sistema: "Android",
      versao: "5.1.1 Lollipop",
      tipo_tela: "TFT LCD",
      tamanho_display: "4'",
      resolucao: "1440 x 2560 pixel",
      camera_traseira: "8MP",
      camera_frontal: "1MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-58bd610f-moto-g-3a-geracao-16gb-4g-dual-preto-2.png",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-58bd6110-moto-g-3a-geracao-16gb-4g-dual-preto-3.png",
    },
    {
      id: "20",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-597a4afd-moto-z-play-preto-1.jpg",
      titulo: "Motorola Moto Z Play",
      preco: "2509,56",
      parcela: "ou 12x R$ 89,90 sem juros",
      tituloDetalhe: "Moto Z Play Motorola Dual Xt1635 Preto",
      marca: "Motorola",
      modelo: "Moto Z",
      cor: "Preto",
      chip: "Nano Chip",
      qtd_chip: "Single Chip",
      memoria_interna: "64GB",
      memoria_ram: "1GB",
      processador: "1.8 GHz 8 Core",
      sistema: "Android 9 Pie",
      versao: "5.1.1 Lollipop",
      tipo_tela: "TFT LCD",
      tamanho_display: "5.1'",
      resolucao: "1440 x 2560 pixel",
      camera_traseira: "16MP",
      camera_frontal: "5MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-moto-z-play-preto-2.jpg",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-moto-z-play-preto-3.jpg",
    },

    {
      id: "21",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-moto-x4-preto-frete.png",
      titulo: "Motorola Moto X4 Preto",
      preco: "1565,90",
      parcela: "ou 12x R$ 56,99 sem juros",
      tituloDetalhe: "Smartphone Motorola Moto X4 Dual Cam",
      marca: "Motorola",
      modelo: "Moto X",
      cor: "Preto",
      chip: "Nano Chip",
      qtd_chip: "Single Chip",
      memoria_interna: "32GB",
      memoria_ram: "3GB",
      processador: "Octa-Core 2.2 GHz (Qualcomm Snapdragon 630)",
      sistema: "Android",
      versao: "Android 7.1.1 Nougat",
      tipo_tela: "LCD IPS",
      tamanho_display: "5.2'",
      resolucao: "Full HD - 1920x1080",
      camera_traseira: "12 + 8MP (Dual Traseira)",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-moto-x4-preto-lado.png",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-moto-x4-preto-costas.png",
    },
    {
      id: "22",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-motorola-moto-x2-32gb-preto.png",
      titulo: "Motorola Moto X2 Preto",
      preco: "1254,00",
      parcela: "ou 12x R$ 50,99 sem juros",
      tituloDetalhe: "Motorola Moto X2 32gb Preto",
      marca: "Motorola",
      modelo: "Moto X",
      cor: "Preto",
      chip: "Nano Chip",
      qtd_chip: "Dual Chip",
      memoria_interna: "32GB",
      memoria_ram: "2GB",
      processador: "Quad-Core 2.5 GHz",
      sistema: "Android",
      versao: "4.1.1 Lollipop",
      tipo_tela: "LCD IPS",
      tamanho_display: "5.2'",
      resolucao: "1080 x 1920 pixels",
      camera_traseira: "13MP",
      camera_frontal: "2MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-58bd6172-moto-x-2a-geracao-32-gb-preto-2.png",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-58bd6174-moto-x-2a-geracao-32-gb-preto-3.png",
    },
    {
      id: "23",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-moto-g6-play-indigo-frete.png",
      titulo: "Motorola Moto G6 Play",
      preco: "1299,90",
      parcela: "ou 12x R$ 40,90 sem juros",
      tituloDetalhe: "Smartphone Motorola Moto G6 32GB Dual Chip",
      marca: "Motorola",
      modelo: "Moto G",
      cor: "Preto",
      chip: "Nano Chip",
      qtd_chip: "Dual Chip",
      memoria_interna: "32GB",
      memoria_ram: "3GB",
      processador: "Octa-Core 1.8 GHz - Qualcomm Snapdragon 450 (SDM450)",
      sistema: "Android",
      versao: "Android Oreo - 8.0",
      tipo_tela: "LCD IPS",
      tamanho_display: "5.7'",
      resolucao: "12 + 5MP (Dual Traseira)",
      camera_traseira: "13MP",
      camera_frontal: "8MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-5c0eb064-moto-g6-indigo-lado.png",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-5c0eb064-moto-g6-indigo-costas.png",
    },
    {
      id: "24",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-j5-2016-metal-dourado-1.jpg",
      titulo: "Samsung J5 Prime Dourado",
      preco: "899,00",
      parcela: "ou 12x R$ 38,92 sem juros",
      tituloDetalhe: "Smartphone Samsung Galaxy J5 Prime Dual Chip",
      marca: "Samsung",
      modelo: "Galaxy J5 Prime",
      series: "Galaxy J",
      cor: "Dourado",
      chip: "Nano Chip",
      qtd_chip: "Dual Chip",
      memoria_interna: "32GB",
      memoria_ram: "2GB",
      processador: "Quad-Core 1.4GHz",
      sistema: "Android",
      versao: "Android 6.0.1",
      tipo_tela: "AMOLED",
      tamanho_display: "5'",
      resolucao: "1280x720 (HD)",
      camera_traseira: "13MP",
      camera_frontal: "5MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-j5-2016-metal-dourado-3.jpg",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-j5-2016-metal-dourado-2.jpg",
    },

    {
      id: "25",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-s6-edge-plus-preto-1.jpg",
      titulo: "Samsung Galaxy S6 Edge",
      preco: "1489,99",
      parcela: "ou 12x R$ 45,99 sem juros",
      tituloDetalhe: "Samsung Galaxy S6 Edge Preto 32GB",
      marca: "Samsung",
      modelo: "Galaxy S6 Flat",
      series: "Galaxy S",
      cor: "Preto",
      chip: "Nano Chip",
      qtd_chip: "Single Chip",
      memoria_interna: "32GB",
      memoria_ram: "4GB",
      processador: "Octa-Core (Quad 2.1 + Quad 1.5)",
      sistema: "Android",
      versao: "5.1.1 Lollipop",
      tipo_tela: "Super AMOLED",
      tamanho_display: "5.7'",
      resolucao: "2560 x 1440 (518 ppi)",
      camera_traseira: "16MP",
      camera_frontal: "5MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-58593d7f-galaxys6edgepretolateral.png",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-58593d80-galaxys6edgepretotraseira.png",
    },

    {
      id: "26",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-a7-2017-dourado-1.jpg",
      titulo: "Samsung Galaxy A7",
      preco: "1455,95",
      parcela: "ou 12x R$ 45,99 sem juros",
      tituloDetalhe: "Samsung Galaxy A7 2017 Dourado",
      marca: "Samsung",
      modelo: "Galaxy A7",
      series: "Galaxy A",
      cor: "Dourado",
      chip: "Nano Chip",
      qtd_chip: "Single Chip",
      memoria_interna: "32GB",
      memoria_ram: "2GB",
      processador: "Octa-Core 1.9 GHz",
      sistema: "Android",
      versao: "Android",
      tipo_tela: "Super AMOLED",
      tamanho_display: "5.2'",
      resolucao: "1920 x 1080 pixels",
      camera_traseira: "16 MP",
      camera_frontal: "16 MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-58ff99e7-a5-2017-dourado-2.jpg",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-58ff99e8-a5-2017-dourado-3.jpg",
    },

    {
      id: "27",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-samsung-galaxy-a5-dourado.png",
      titulo: "Samsung Galaxy A5",
      preco: "789,90",
      parcela: "ou 12x R$ 50,68 sem juros",
      tituloDetalhe: "Smartphone Samsung Galaxy A5 Dual Chip",
      marca: "Samsung",
      modelo: "SM-A520F/DS",
      series: "Galaxy A",
      cor: "Dourado",
      chip: "Nano Chip",
      qtd_chip: "Dual Chip",
      memoria_interna: "64GB",
      memoria_ram: "2GB",
      processador: "Octa-Core 1.9GHz",
      sistema: "Android",
      versao: "Android 6.0",
      tipo_tela: "Super AMOLED",
      tamanho_display: "5.2'",
      resolucao: "1920 x 1080 pixels",
      camera_traseira: "16 MP",
      camera_frontal: "16 MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-a5-a500m-dour-2.jpg",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-585aa4fe-dt-traseiraa5dourado.png",
    },

    {
      id: "28",
      imagem:
        "https://imagens.trocafone.com/images/phones/dt-galaxy-s9-azul-frente.png",
      titulo: "Samsung Galaxy S9 Azul",
      preco: "2269,00",
      parcela: "ou 12x R$129,08 sem juros",
      tituloDetalhe: "Samsung Galaxy S9 Desbloqueado 128GB Dual Chip",
      marca: "Samsung",
      modelo: "Galaxy S9",
      series: "Galaxy S",
      cor: "Azul",
      chip: "Nano Chip",
      qtd_chip: "Dual Chip",
      memoria_interna: "64GB",
      memoria_ram: "2GB",
      processador: "Octa-Core 2.8GHz",
      sistema: "Android",
      versao: "Android 8.0",
      tipo_tela: "Super AMOLED",
      tamanho_display: "5.8'",
      resolucao: "2960 x 1440 (Quad HD+)",
      camera_traseira: "12MP Dual Cam",
      camera_frontal: "16 MP",
      lado:
        "https://imagens.trocafone.com/images/phones/dt-galaxy-s9-azul-perfil.png",
      traseira:
        "https://imagens.trocafone.com/images/phones/dt-galaxy-s9-azul-traseira.png",
    },
  ]);
  
  return (
    <DataContext.Provider value={[products, setProducts]}>
      {props.children}
    </DataContext.Provider>
  );
}

export default useData;
