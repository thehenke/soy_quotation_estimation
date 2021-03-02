import { useState } from 'react';
import styles from './SearchForm.module.css';

export default function SearchForm(props) {
    // const cities = [{name: 'Marília - SP'}, {name: 'Pompéia - SP'}, {name: 'Oriente - SP'}];
    // const cultures = [{name: 'Milho'}, {name: 'Soja'}];
    // const [city, setCity] = useState('');
    // const [culture, setCulture] = useState('');
    // const [dayStart, setDayStart] = useState('');
    // const [dayEnd, setDayEnd] = useState('');
    // const [plantedArea, setPlantedArea] = useState('');
    const [yesterday, setYesterday] = useState(0);
    const [yesterday_1, setYesterday_1] = useState(0);
    const [yesterday_diff, setYesterday_diff] = useState(0);
    const [last_week, setLast_week] = useState(0);
    const [last_year, setLast_year] = useState(0);
    const [last_month, setLast_month] = useState(0);

    // função para enviar os dados de uma nova requisição
    function submit() {
        let content = {}
        content.yesterday = yesterday;
        content.yesterday_1 = yesterday_1;
        content.yesterday_diff = yesterday - yesterday_1;
        content.last_week = last_week;
        content.last_month = last_month;
        content.last_year = last_year;

        props.NewSearch(content)
    }

    return(
        <div className={styles.containerPage}>
            <div className={styles.containerImage}>
                <img src="./logo.png" className={styles.logo}/>
                <p className={styles.logoText}>Sua calculadora para<br /><strong>estimativa de produção agricola</strong></p>
            </div>
            <form className={styles.containerForm} onSubmit={()=>submit()}>
                {/* <div className='inputContainer'>
                    <p className='inputTitle'>Selecione sua cidade</p>
                    <select className='inputContent' defaultValue={city} onChange={e => setCity(e.target.value)} required>
                        <option value="" disabled hidden>Escolha uma cidade</option>
                        {cities.map(city => {
                            return <option key={city.name} value={city.name}>{city.name}</option>
                        })}
                    </select>
                </div>
                 */}
                
                {/* <div className='inputDayContainer'>
                    <div className='inputContainer' style={{ marginRight: 8 }}>
                        <p className='inputTitle'>Do dia</p>
                        <input className='inputContent' value={dayStart} onChange={e => setDayStart(e.target.value)} required/>
                    </div>
                    <div className='inputContainer' style={{ marginLeft: 0 }}>
                        <p className='inputTitle'>Até o dia</p>
                        <input className='inputContent' value={dayEnd} onChange={e => setDayEnd(e.target.value)} required/>
                    </div>
                </div> */}

                <h1 className='inputContainer'>Insira os valores das cotações:</h1>
                
                <div className='inputContainer'>
                    <p className='inputTitle'>Hoje</p>
                    <input className='inputContent' type="number" value={yesterday} onChange={e => setYesterday(e.target.value)} required/>
                </div>
                
                <div className='inputContainer'>
                    <p className='inputTitle'>Ontem</p>
                    <input className='inputContent' type="number" value={yesterday_1} onChange={e => setYesterday_1(e.target.value)} required/>
                </div>
                
                <div className='inputContainer' style={{ display: 'none' }}>
                    <p className='inputTitle'>Diferença de ontem e anteontem</p>
                    <input className='inputContent' type="number" value={yesterday_diff} onChange={e => setYesterday_diff(e.target.value)} required/>
                </div>
                
                <div className='inputContainer'>
                    <p className='inputTitle'>7 dias atrás</p>
                    <input className='inputContent' type="number" value={last_week} onChange={e => setLast_week(e.target.value)} required/>
                </div>
                
                <div className='inputContainer'>
                    <p className='inputTitle'>30 dias atrás</p>
                    <input className='inputContent' type="number" value={last_month} onChange={e => setLast_month(e.target.value)} required/>
                </div>
                
                <div className='inputContainer'>
                    <p className='inputTitle'>365 dias atrás</p>
                    <input className='inputContent' type="number" value={last_year} onChange={e => setLast_year(e.target.value)} required/>
                </div>

                <div className='inputContainer' >
                    <input className='buttonSubmit' type="submit" />
                </div>
            </form>
        </div>
    )
};