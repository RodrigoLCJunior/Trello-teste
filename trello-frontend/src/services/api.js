/* import axios from 'axios';

const API_URL = 'http://localhost:3000/cartoes'; // URL base do seu backend

// Função para buscar cartões do backend
export const fetchCartoes = async () => {
    try {
        const response = await axios.get(API_URL); // Faz uma requisição GET à API
        return response.data; // Retorna os dados recebidos
    } catch (error) {
        console.error('Erro ao buscar cartões:', error);
        throw error; // Lança o erro para ser tratado no componente
    }
};

// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Endereço base da API (ajuste conforme necessário)

// Função para buscar todos os cartões
export const getCartoes = async () => {
    try {
        const response = await axios.get(`${API_URL}/cartoes`);
        return response.data; // Retorna os dados dos cartões
    } catch (error) {
        console.error('Erro ao buscar cartões:', error);
        throw error; // Lança o erro para que o componente possa lidar com ele
    }
};

// Função para adicionar um novo cartão
export const addCartao = async (novoCartao) => {
    try {
        const response = await axios.post(`${API_URL}/cartoes`, novoCartao);
        return response.data; // Retorna o cartão adicionado
    } catch (error) {
        console.error('Erro ao adicionar cartão:', error);
        throw error; // Lança o erro para que o componente possa lidar com ele
    }
};*/

/* import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Ajuste para o endereço correto do backend

// Buscar todos os quadros
export const getQuadros = async () => {
    try {
        const response = await axios.get(`${API_URL}/quadros`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar quadros:', error);
        throw error;
    }
};

// Adicionar um novo quadro
export const addQuadro = async (novoQuadro) => {
    try {
        const response = await axios.post(`${API_URL}/quadros`, novoQuadro);
        return response.data;
    } catch (error) {
        console.error('Erro ao adicionar quadro:', error);
        throw error;
    }
};   */

import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Ajuste para o endereço correto do backend

// api.js

// Função para obter todos os quadros
export const getQuadros = async () => {
    const response = await fetch('/api/quadros'); // Supondo que '/api/quadros' seja a rota para buscar os quadros
    const data = await response.json();
    return data;
  };
  
  // Função para adicionar um novo quadro
  export const addQuadro = async (novoQuadro) => {
    const response = await fetch('/api/quadros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoQuadro), // Envia o nome do novo quadro para o backend
    });
  
    if (!response.ok) {
      throw new Error('Erro ao criar quadro');
    }
  
    const data = await response.json();
    return data; // Retorna o quadro criado para o frontend
  };
  

// Adicionar um novo cartão
export const addCartao = async (novoCartao) => {
    try {
        const response = await axios.post(`${API_URL}/cartoes`, novoCartao);
        return response.data;
    } catch (error) {
        console.error('Erro ao adicionar cartão:', error);
        throw error;
    }};

    // Buscar todos os cartões
export const getCartoes = async () => {
    try {
        const response = await axios.get(`${API_URL}/cartoes`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar cartões:', error);
        throw error;
    }
};


