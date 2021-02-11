import { useState } from 'react';
import styles from './SearchResult.module.css';

export default function SearchResult() {
    const cities = [{name: 'Marília - SP'}, {name: 'Pompéia - SP'}, {name: 'Oriente - SP'}];
    const cultures = [{name: 'Milho'}, {name: 'Soja'}];
    const [city, setCity] = useState();
    const [culture, setCulture] = useState();
    const [dayStart, setDayStart] = useState();
    const [dayEnd, setDayEnd] = useState();
    const [plantedArea, setPlantedArea] = useState();

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

                    <div className={styles.headerInputContainer} style={{ marginRight: 0 }}>
                        <div className='buttonSubmit' style={{marginTop: 26}}>
                            <label for="send">
                                <input name="send" type="submit" style={{ display: 'none' }}/>
                                <i class="fas fa-redo-alt" style={{ padding: 12 }}></i>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <div className={`${styles.body} margin-page`}>
                <div className="card" style={{ marginTop: 24 }}>
                    salv
                </div>
                <div className="responsiveColumn" style={{ marginTop: 24, display: 'flex' }}>
                    <div className="card" style={{ marginRight: 12 }}>
                        salv
                    </div>
                    <div className="card" style={{ marginLeft: 12 }}>
                        salv
                    </div>
                </div>
            </div>
        </div>
    );
}