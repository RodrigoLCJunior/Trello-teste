// src/components/card/Card.jsx
import './Card.scss';
import { useState, useEffect } from 'react';
import { addCartao, getCartoes, getQuadros, addQuadro } from '../../services/api';

const Card = () => {
    const [cartoes, setCartoes] = useState([]); // Estado para armazenar os cartões
    const [loading, setLoading] = useState(true); // Estado para indicar se os dados estão carregando
    const [error, setError] = useState(null); // Estado para lidar com erros

    // Função para buscar os cartões do backend
    const fetchCartoes = async () => {
        try {
            const data = await getCartoes(); // Chama a função de api para pegar os cartões
            setCartoes(data); // Atualiza o estado com os dados recebidos
        } catch (err) {
            setError('Erro ao carregar cartões'); // Define o erro caso ocorra
        } finally {
            setLoading(false); // Finaliza o estado de loading
        }
    };

    // Função para adicionar um novo cartão
    const adicionarCartao = async () => {
        const novoCartao = {
            titulo: 'Novo Cartão',
            descricao: 'Descrição do cartão',
            tag: 'Novo'
        };

        try {
            const data = await addCartao(novoCartao); // Chama a função de api para adicionar o cartão
            setCartoes((prevCartoes) => [...prevCartoes, data]); // Atualiza o estado com o novo cartão
        } catch (err) {
            setError('Erro ao adicionar cartão');
        }
    };

    useEffect(() => {
        fetchCartoes(); // Chama a função para buscar os cartões quando o componente for montado
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="card">
            <h3>Meus Cartões</h3>
            <div className="kanban">
                {cartoes.map((cartao) => (
                    <div className="kanban__section" key={cartao.id}>
                        <h4>{cartao.titulo}</h4>
                        <p>{cartao.descricao}</p>
                        <div className="card-footer">
                            <span className="card-tag">{cartao.tag}</span>
                        </div>
                    </div>
                ))}
            </div>
            {/* Botão para adicionar novo cartão */}
            <button className="add-btn" onClick={adicionarCartao}>
                Adicionar Cartão
            </button>
        </div>
    );
};

export default Card;
