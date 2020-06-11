import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import './styles.css';
import api from '../../services/api';

import logo from '../../assets/logo.svg';

interface Items {
    id: number,
    title: string,
    image: string
}

const CreatePoint = () => {
    const [items, setItems] = useState<Items[]>([]);
    useEffect(() => {
        api.get("items").then(response => {
            setItems(response.data);
        })
    }, [])
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta" />
                <Link to="/">
                    <FiArrowLeft />
                    Voltar para home.
                </Link>
            </header>

            <form>
                <h1>Cadastro do <br />ponto de coleta.</h1>

                <fieldset>
                    <legend>Dados</legend>

                    <div className="field">
                        <label htmlFor="name">Nome da Entidade</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="whatsapp">Whatsapp/Contato</label>
                            <input type="text" name="whatsapp" id="whatsapp" />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o Endereço no mapa.</span>
                    </legend>

                    <Map center={[-22.2293869, -54.7961448,]} zoom={15}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[-22.2293869, -54.7961448,]} />
                    </Map>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado</label>
                            <select name="uf" id="uf">
                                <option value="0">Selecione o Estado</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" id="city">
                                <option value="0">Selecione a Cidade</option>
                            </select>
                        </div>

                    </div>

                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Ítens de Coleta</h2>
                        <span>Selecione um mais ítens abaixo.</span>
                    </legend>

                    <ul className="items-grid">
                        {items.map(item =>
                            (<li key={item.id}>
                                <img src={item.image} alt={item.title} />
                            <span>{item.title}</span>
                            </li>
                            ))
                            }


                    </ul>
                </fieldset>

                <button type="submit">
                    Cadastrar ponto de coleta.
                </button>
            </form>
        </div>
    )
}

export default CreatePoint;