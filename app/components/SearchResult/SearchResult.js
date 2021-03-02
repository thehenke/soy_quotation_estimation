import { useState } from 'react';
import Link from 'next/link';
import styles from './SearchResult.module.css';
import Loading from '../Loading/Loading';

export default function SearchResult(props) {
    const [yesterday, setYesterday] = useState(props.content.yesterday);
    const [yesterday_diff, setYesterday_diff] = useState(props.content.yesterday_diff);
    const [yesterday_1, setYesterday_1] = useState(props.content.yesterday_1);
    const [last_week, setLast_week] = useState(props.content.last_week);
    const [last_month, setLast_month] = useState(props.content.last_month);
    const [last_year, setLast_year] = useState(props.content.last_year);

    // variasveis para manter o valor da pagina estatico até fazer outra requisição
    const yesterdayStatic = props.content.yesterday;
    const yesterday_diffStatic = props.content.yesterday_dif;
    const yesterday_1Static = props.content.yesterday_1;
    const last_weekStatic = props.content.last_week;
    const last_yearStatic = props.content.last_year;
    const last_monthStatic = props.content.last_month;

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

    if (props.dataSearch.result) {
        return(
            <div>
                {console.log(yesterday_diff)}
                <div className={`${styles.header} margin-page`}>
                    <div onClick={() => window.location.reload()}>
                        <img src="./logo.png" className={styles.logo}/>
                    </div>
                    <form onSubmit={() => submit()}>
                        <div className={styles.headerInputContainer}>
                            <p className='inputTitle'>Hoje</p>
                            <input className='inputContent' type="number" value={yesterday} onChange={e => setYesterday(e.target.value)} required/>
                        </div>
                        
                        <div className={styles.headerInputContainer}>
                            <p className='inputTitle'>Ontem</p>
                            <input className='inputContent' type="number" value={yesterday_1} onChange={e => setYesterday_1(e.target.value)} required/>
                        </div>
                        
                        <div className={styles.headerInputContainer} style={{ display: 'none' }}>
                            <p className='inputTitle'>Valor do dia anterior</p>
                            <input className='inputContent' type="number" value={yesterday_diff} onChange={e => setYesterday_diff(e.target.value)} required/>
                        </div>
                        
                        <div className={styles.headerInputContainer}>
                            <p className='inputTitle'>7 dias atrás</p>
                            <input className='inputContent' type="number" value={last_week} onChange={e => setLast_week(e.target.value)} required/>
                        </div>
                        
                        <div className={styles.headerInputContainer}>
                            <p className='inputTitle'>30 dias atrás</p>
                            <input className='inputContent' type="number" value={last_month} onChange={e => setLast_month(e.target.value)} required/>
                        </div>
                        
                        <div className={styles.headerInputContainer}>
                            <p className='inputTitle'>365 dias atrás</p>
                            <input className='inputContent' type="number" value={last_year} onChange={e => setLast_year(e.target.value)} required/>
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
                    <div style={{ marginTop: 24 }}>
                        <h1 className="title-card">Porcentagem aproveitável estimada</h1>
                        <div className="card">
                            <div style={{ display: 'flex' }}>
                                <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                                    <img src="results/80.png" style={{ width: 240 }}/>
                                    <p style={{ fontWeight: 'bold', fontSize: 80 }}><span style={{ fontSize: 240, color: '#4caf50', margin: '0 0 0 40px'}}>{props.dataSearch.result.toFixed(2)}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="responsiveColumn" style={{ marginTop: 24, display: 'flex' }}>
                        <div style={{width: '100%', marginRight: 12}}>
                            <h1 className="title-card">Dia anterior</h1>
                            <div className="card">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit aliquet sagittis id consectetur. Est placerat in egestas erat imperdiet sed euismod nisi porta. Urna porttitor rhoncus dolor purus non enim praesent. Adipiscing enim eu turpis egestas pretium aenean. Habitant morbi tristique senectus et. Nulla pellentesque dignissim enim sit amet venenatis. Ipsum dolor sit amet consectetur. </p>
                            </div>
                        </div>
                        <div style={{width: '100%', marginLeft: 12}}>
                            <h1 className="title-card">Próximo dia</h1>
                            <div className="card">
                                <img src="./fakeGraph.png" style={{ width: '50%', margin: 'auto', display: 'flex' }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <Loading />;
    }
}