import styles from '../styles/Home.module.css'

export default function Home() {
  const cities = [{name: 'Marília - SP'}, {name: 'Pompéia - SP'}, {name: 'Oriente - SP'}];
  const cultures = [{name: 'Milho'}, {name: 'Soja'}];

  return (
    <form className={styles.container}>
      <p className={styles.title}>Capro<span>Agro</span></p>

      <div className='inputContainer'>
        <p className='inputTitle'>Selecione sua cidade</p>
        <select className='inputContent'>
          {cities.map(city => {
            return <option key={city.name} value={city.name}>{city.name}</option>
          })}
        </select>
      </div>
      
      <div className='inputContainer'>
        <p className='inputTitle'>Selecione sua cultura</p>
        <select className='inputContent'>
          {cultures.map(culture => {
            return <option key={culture.name} value={culture.name}>{culture.name}</option>
          })}
        </select>
      </div>
      
      
      <div className='inputDayContainer'>
        <div className='inputContainer' style={{ marginRight: 8 }}>
          <p className='inputTitle'>Do dia</p>
          <input className='inputContent'/>
        </div>
        <div className='inputContainer'>
          <p className='inputTitle'>Até o dia</p>
          <input className='inputContent'/>
        </div>
      </div>
      
      <div className='inputContainer'>
        <p className='inputTitle'>Área plantada em hectares</p>
        <input className='inputContent' type="number"/>
      </div>

      <div className='inputContainer' >
        <input className='buttonSubmit' type="submit" />
      </div>
    </form>
  )
}
