# Desafio: Classificador de Nível de Herói

## Descrição

Este projeto é um classificador simples que categoriza o nível de um herói com base na sua quantidade de experiência (XP). Dependendo da quantidade de XP, o herói será classificado em um dos seguintes níveis: Ferro, Bronze, Prata, Ouro, Platina, Ascendente, Imortal ou Radiante.

## O que foi utilizado

- **Variáveis:** Para armazenar o nome do herói e sua quantidade de XP.
- **Operadores:** Para realizar comparações entre os valores de XP.
- **Laços de repetição:** Para mostrar as ranks possíveis.
- **Estruturas de decisão:** Para determinar a classificação do herói com base em seu XP.

## Objetivo

O objetivo deste desafio é criar um programa que:

1. Armazene o nome do herói e sua quantidade de experiência (XP) em variáveis.
2. Utilize uma estrutura de decisão para comparar o XP com os intervalos pré-definidos e classificar o herói em um dos seguintes níveis:

   - XP menor que 1.000: **Ferro**
   - XP entre 1.001 e 2.000: **Bronze**
   - XP entre 2.001 e 5.000: **Prata**
   - XP entre 5.001 e 7.000: **Ouro**
   - XP entre 7.001 e 8.000: **Platina**
   - XP entre 8.001 e 9.000: **Ascendente**
   - XP entre 9.001 e 10.000: **Imortal**
   - XP maior ou igual a 10.001: **Radiante**

3. Exiba uma mensagem final indicando o nome do herói e seu nível correspondente, como no exemplo:
   ```bash
   O Herói de nome {nome} está no nível de {nível}
