import { useState } from 'react';
import styles from './SearchResult.module.css';
import api from '../../pages/api.json';

export default function SearchResult() {
    const cities = [{name: 'Marília - SP'}, {name: 'Pompéia - SP'}, {name: 'Oriente - SP'}];
    const cultures = [{name: 'Milho'}, {name: 'Soja'}];
    const [city, setCity] = useState('Marília - SP');
    const [culture, setCulture] = useState('Milho');
    const [dayStart, setDayStart] = useState('01/03/2020');
    const [dayEnd, setDayEnd] = useState('05/03/2020');
    const [plantedArea, setPlantedArea] = useState('40');

    return(
        <div>
            <div className={`${styles.header} margin-page`}>
                <div>
                    <img src="./logo.png" className={styles.logo}/>
                </div>
                <form>
                    <div className={styles.headerInputContainer}>
                        <p className='inputTitle'>Cidade</p>
                        <select className={`${styles.headerInput} inputContent`} value={city} onChange={e => setCity(e.target.value)} required>
                            <option value="" selected disabled hidden>Escolha uma cidade</option>
                            {cities.map(city => {
                            return <option key={city.name} value={city.name}>{city.name}</option>
                            })}
                        </select>
                    </div>

                    <div className={styles.headerInputContainer}>
                        <p className='inputTitle'>Cultura</p>
                        <select className={`${styles.headerInput} inputContent`} value={culture} onChange={e => setCulture(e.target.value)} required>
                            <option value="" selected disabled hidden>Escolha uma cultura</option>
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
                        <input className={`${styles.headerInput} inputContent`} type="number" value={plantedArea} onChange={e => setPlantedArea(e.target.value)} required/>
                    </div>

                    <div className={styles.headerInputContainer} style={{ marginRight: 0, width: 40 }}>
                        <div className='buttonSubmit' style={{marginTop: 26}}>
                            <label for="send">
                                <input name="send" type="submit" style={{ display: 'none' }}/>
                                <i class="fas fa-redo-alt" style={{ padding: 12 }}></i>
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
                            <p style={{ fontWeight: 'bold' }}>Cidade:</p>
                            <p style={{ marginBottom: 16, fontSize: 20 }}>{city}</p>
                            
                            <p style={{ fontWeight: 'bold' }}>Cultura:</p>
                            <p style={{ marginBottom: 16, fontSize: 20 }}>{culture}</p>
                            
                            <p style={{ fontWeight: 'bold' }}>Data:</p>
                            <p style={{ marginBottom: 16, fontSize: 20 }}>de&nbsp;{dayStart}<br />a&nbsp;{dayEnd}</p>
                            
                            <p style={{ fontWeight: 'bold' }}>Área:</p>
                            <p style={{ fontSize: 20 }}>{plantedArea} hectares</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                            <img src="results/80.png" style={{ width: 240 }}/>
                            <p style={{ fontWeight: 'bold', fontSize: 80 }}><span style={{ fontSize: 240, color: '#447554', margin: '0 0 0 40px'}}>87</span>%</p>
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
}