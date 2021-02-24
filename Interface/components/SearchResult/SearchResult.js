import { useState } from 'react';
import Link from 'next/link';
import styles from './SearchResult.module.css';
import Loading from '../Loading/Loading';

export default function SearchResult(props) {
    const cities = [{name: 'Marília - SP'}, {name: 'Pompéia - SP'}, {name: 'Oriente - SP'}];
    const cultures = [{name: 'Milho'}, {name: 'Soja'}];
    const [city, setCity] = useState(props.content.city);
    const [culture, setCulture] = useState(props.content.culture);
    const [dayStart, setDayStart] = useState(props.content.dayStart);
    const [dayEnd, setDayEnd] = useState(props.content.dayEnd);
    const [plantedArea, setPlantedArea] = useState(props.content.plantedArea);

    // variasveis para manter o valor da pagina estatico até fazer outra requisição
    const cityStatic = props.content.city;
    const cultureStatic = props.content.culture;
    const dayStartStatic = props.content.dayStart;
    const dayEndStatic = props.content.dayEnd;
    const plantedAreaStatic = props.content.plantedArea;

    // função para enviar os dados de uma nova requisição
    function submit() {
        let content = {};
        content.city = city;
        content.culture = culture;
        content.dayStart = dayStart;
        content.dayEnd = dayEnd;
        content.plantedArea = plantedArea;

        props.NewSearch(content);
    }

    if (props.dataSearch) {
        return(
            <div>
                <div className={`${styles.header} margin-page`}>
                    <div onClick={() => window.location.reload()}>
                        <img src="./logo.png" className={styles.logo}/>
                    </div>
                    <form onSubmit={() => submit()}>
                        <div className={styles.headerInputContainer}>
                            <p className='inputTitle'>Cidade</p>
                            <select className={`${styles.headerInput} inputContent`} value={city} onChange={e => setCity(e.target.value)} required>
                                {cities.map(city => {
                                    return <option key={city.name} value={city.name}>{city.name}</option>
                                })}
                            </select>
                        </div>

                        <div className={styles.headerInputContainer}>
                            <p className='inputTitle'>Cultura</p>
                            <select className={`${styles.headerInput} inputContent`} value={culture} onChange={e => setCulture(e.target.value)} required>
                                {cultures.map(culture => {
                                    return <option key={culture.name} value={culture.name}>{culture.name}</option>
                                })}
                            </select>
                        </div>
            
                        <div className={styles.headerInputContainer}>
                            <p className='inputTitle'>Do dia</p>
                            <input className={`${styles.headerInput} inputContent`} value={dayStart} onChange={e => setDayStart(e.target.value)} required/>
                        </div>

                        <div className={styles.headerInputContainer}>
                            <p className='inputTitle'>Até o dia</p>
                            <input className={`${styles.headerInput} inputContent`} value={dayEnd} onChange={e => setDayEnd(e.target.value)} required/>
                        </div>
                        
                        <div className={styles.headerInputContainer}>
                            <p className='inputTitle'>Área plantada </p>
                            <input className={`${styles.headerInput} inputContent`} type="number" value={plantedArea || ''} onChange={e => setPlantedArea(e.target.value)} required/>
                        </div>

                        <div className={styles.headerInputContainer} style={{ marginRight: 0, width: 40 }}>
                            <div className='buttonSubmit' style={{ marginTop: 26 }}>
                                <label htmlFor="send">
                                    <input id="send" type="submit" style={{ display: 'none' }}/>
                                    <i className="fas fa-redo-alt" style={{ padding: 12, cursor: 'pointer' }}></i>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={`${styles.body} margin-page`} style={{ marginBottom: 24 }}>
                    <div className="card" style={{ marginTop: 24 }}>
                        <h1 className="title-card">Porcentagem aproveitável estimada</h1>
                        <div style={{ display: 'flex' }}>
                            <div className={styles.serachData}>
                                <p style={{ fontSize: 14 }}>Cidade:</p>
                                <p style={{ marginBottom: 16, fontSize: 24 }}>{cityStatic}</p>
                                
                                <p style={{ fontSize: 14 }}>Cultura:</p>
                                <p style={{ marginBottom: 16, fontSize: 24 }}>{cultureStatic}</p>
                                
                                <p style={{ fontSize: 14 }}>Data:</p>
                                <p style={{ marginBottom: 16, fontSize: 24 }}>de&nbsp;{dayStartStatic}<br />a&nbsp;{dayEndStatic}</p>
                                
                                <p style={{ fontSize: 14 }}>Área:</p>
                                <p style={{ fontSize: 24 }}>{plantedAreaStatic} hectares</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                                <img src="results/80.png" style={{ width: 240 }}/>
                                <p style={{ fontWeight: 'bold', fontSize: 80 }}><span style={{ fontSize: 240, color: '#4caf50', margin: '0 0 0 40px'}}>87</span>%</p>
                            </div>
                        </div>
                    </div>
                    <div className="responsiveColumn" style={{ marginTop: 24, display: 'flex' }}>
                        <div className="card" style={{ marginRight: 12 }}>
                            <h1 className="title-card">Dia anterior</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit aliquet sagittis id consectetur. Est placerat in egestas erat imperdiet sed euismod nisi porta. Urna porttitor rhoncus dolor purus non enim praesent. Adipiscing enim eu turpis egestas pretium aenean. Habitant morbi tristique senectus et. Nulla pellentesque dignissim enim sit amet venenatis. Ipsum dolor sit amet consectetur. </p>
                        </div>
                        <div className="card" style={{ marginLeft: 12 }}>
                            <h1 className="title-card">Próximo dia</h1>
                            <img src="./fakeGraph.png" style={{ width: '50%', margin: 'auto', display: 'flex' }}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <Loading />;
    }
}