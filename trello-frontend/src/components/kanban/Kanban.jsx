import React, { useState, useEffect } from 'react';
import { addCartao, getCartoes, getQuadros, addQuadro } from '../../services/api';
import Card from '../card/Card';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Kanban = () => {
    const [boards, setBoards] = useState([]); // Estado para armazenar os boards
    const [novoCartao, setNovoCartao] = useState(''); // Estado para o novo cartão
    const [cartoes, setCartoes] = useState([]); // Cartões a serem exibidos
    const [novoQuadro, setNovoQuadro] = useState(''); // Estado para o nome do novo quadro

    useEffect(() => {
        // Buscar quadros e cartões ao montar o componente
        const fetchDados = async () => {
            try {
                const dadosQuadros = await getQuadros();
                setBoards(dadosQuadros);

                const dadosCartoes = await getCartoes();
                setCartoes(dadosCartoes);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchDados();
    }, []);

    // Função para adicionar um novo quadro
    const handleAddQuadro = async () => {
        if (!novoQuadro) return;

        const novoQuadroObj = { nome: novoQuadro };

        try {
            const quadroAdicionado = await addQuadro(novoQuadroObj);
            setBoards([...boards, quadroAdicionado]);
            setNovoQuadro('');
        } catch (error) {
            console.error('Erro ao adicionar quadro:', error);
        }
    };

    // Função para adicionar um novo cartão
    const handleAddCartao = async (boardId) => {
        if (!novoCartao) return;

        const novoCard = {
            texto: novoCartao,
            boardId,
        };

        try {
            const novoCartaoAdicionado = await addCartao(novoCard);
            setCartoes([...cartoes, novoCartaoAdicionado]);
            setNovoCartao('');
        } catch (error) {
            console.error('Erro ao adicionar cartão:', error);
        }
    };

    // Função para movimentar os cartões
    const onDragEnd = (result) => {
        const { destination, source } = result;

        if (!destination) return; // Se não houver destino, nada acontece

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return; // Se a posição não mudar, nada acontece
        }

        const cardsCopy = Array.from(cartoes);
        const [movedCard] = cardsCopy.splice(source.index, 1); // Remove o cartão da posição original
        movedCard.boardId = destination.droppableId; // Atualiza o boardId do cartão
        cardsCopy.splice(destination.index, 0, movedCard); // Adiciona o cartão na nova posição

        setCartoes(cardsCopy); // Atualiza o estado com os cartões reorganizados
    };

    return (
        <div className="kanban">
            {/* Formulário para adicionar um novo quadro */}
            <div className="add-board">
                <input
                    type="text"
                    value={novoQuadro}
                    onChange={(e) => setNovoQuadro(e.target.value)}
                    placeholder="Nome do novo quadro"
                />
                <button onClick={handleAddQuadro}>Adicionar Quadro</button>
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
                <div className="boards">
                    {boards.map((board) => (
                        <Droppable key={board.id} droppableId={board.id}>
                            {(provided) => (
                                <div
                                    className="board"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    <h3>{board.nome}</h3>
                                    <div className="cards">
                                        {cartoes
                                            .filter((card) => card.boardId === board.id)
                                            .map((card, index) => (
                                                <Draggable key={card.id} draggableId={card.id.toString()} index={index}>
                                                    {(provided) => (
                                                        <div
                                                            className="card"
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <Card key={card.id} card={card} />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                    </div>
                                    <input
                                        type="text"
                                        value={novoCartao}
                                        onChange={(e) => setNovoCartao(e.target.value)}
                                        placeholder="Adicione um novo cartão"
                                    />
                                    <button onClick={() => handleAddCartao(board.id)}>Adicionar Cartão</button>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </div>
            </DragDropContext>
        </div>
    );
};

export default Kanban;
