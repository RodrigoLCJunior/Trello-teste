// src/components/Cartoes.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Cartoes.css';

const Cartoes = () => {
    const [cartoes, setCartoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalVisible, setModalVisible] = useState(false); // Controle do modal
    const [novoCartao, setNovoCartao] = useState({
        titulo: '',
        descricao: '',
        tag: ''
    });

    // Função para buscar os cartões
    const fetchCartoes = async () => {
        try {
            const response = await axios.get('http://localhost:3000/cartoes');
            setCartoes(response.data);
        } catch (err) {
            setError(err);
            console.error('Erro ao buscar cartões:', err);
        } finally {
            setLoading(false);
        }
    };

    // Função para adicionar um novo cartão
    const adicionarCartao = async () => {
        try {
            const response = await axios.post('http://localhost:3000/cartoes', novoCartao);
            setCartoes([...cartoes, response.data]);
            setModalVisible(false); // Fecha o modal após adicionar
            setNovoCartao({ titulo: '', descricao: '', tag: '' }); // Limpa o formulário
        } catch (err) {
            console.error('Erro ao adicionar cartão:', err);
            setError(err);
        }
    };

    // Atualiza os campos de novo cartão
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNovoCartao((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        fetchCartoes(); // Busca os cartões ao montar o componente
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro ao carregar cartões: {error.message}</p>;

    return (
        <div className="board">
            <div className="column">
                <h1>Meus Cartões</h1>
                <button className="add-btn" onClick={() => setModalVisible(true)}>Adicionar Cartão</button>
                
                <ul>
                    {cartoes.map((cartao, index) => (
                        <li key={index} className="card">
                            <h3>{cartao.titulo}</h3>
                            <p>{cartao.descricao}</p>
                            <div className="card-footer">
                                <span className="card-tag">{cartao.tag}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {modalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setModalVisible(false)}>&times;</span>
                        <h2>Adicionar Novo Cartão</h2>
                        <input
                            type="text"
                            name="titulo"
                            placeholder="Título"
                            value={novoCartao.titulo}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="descricao"
                            placeholder="Descrição"
                            value={novoCartao.descricao}
                            onChange={handleInputChange}
                        ></textarea>
                        <input
                            type="text"
                            name="tag"
                            placeholder="Tag"
                            value={novoCartao.tag}
                            onChange={handleInputChange}
                        />
                        <button onClick={adicionarCartao}>Salvar Cartão</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cartoes;
