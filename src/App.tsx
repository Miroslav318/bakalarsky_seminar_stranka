import './App.css'

function App() {
  const diary = [
    {
      date: "23.02 – 01.03.2026",
      tasks: [
        "Rozbehnutie aplikacie na serveri pomocou davinci",
        "Pokračovanie vo vývoji webovej aplikácie.",
      ],
    },
    {
      date: "02.03 – 08.03.2026",
      tasks: [
        "Navrh dokumentacie.",
        "Ciastocna realizacia dokumentacie.",
      ],
    },
    {
      date: "09.03 – 15.03.2026",
      tasks: [
        "Stretnutie so skolitelom",
        "Priprava na zabezpecenie migracie.",
      ],
    },
    {
      date: "16.03 – 22.03.2026",
      tasks: [
        "Vytvorenie webstránky k bakalárskej práci.",
        "Pokracovanie v pisani dokumentacie."
      ],
    },
  ]

  const sources = [
    {
      title: "Článok o modernizácii informačných systémov",
      type: "Článok",
      link: "#",
    },
    {
      title: "Východisková bakalárska práca o systéme L.I.S.T.",
      type: "Záverečná práca",
      link: "#",
    },
    {
      title: "Technický manuál k ASP.NET frameworku",
      type: "Záverečná práca",
      link: "https://learn.microsoft.com/en-us/aspnet/core/overview?view=aspnetcore-10.0",
    },
    {
      title: "Učebnica návrhu webových aplikácií",
      type: "Učebnica",
      link: "#",
    },
    {
      title: "Technický manuál k React frameworku",
      type: "Technický manuál",
      link: "https://legacy.reactjs.org/docs/getting-started.html",
    },
    {
      title: "Návrh dokumentácie projektu (how to pre vyvojarov)",
      type: "Technická dokumentácia",
      link: "#",
    },
  ]

  return (
      <div className="page">
        <main className="container">
          <section className="hero card">
            <p className="eyebrow">Bakalárska práca</p>
            <h1>Pokročilá funkcionalita novej verzie systému L.I.S.T.</h1>
          </section>

          <section className="info-grid">
            <div className="card info-card">
              <p className="label">Študent</p>
              <h3>Miroslav Drugda</h3>
            </div>

            <div className="card info-card">
              <p className="label">Email</p>
              <h3>drugda9@uniba.sk</h3>
            </div>

            <div className="card info-card">
              <p className="label">Školiteľ</p>
              <h3>Mgr. Pavel Petrovič, PhD.</h3>
            </div>

            <div className="card info-card">
              <p className="label">Stav projektu</p>
              <h3 className="accent">Vo vývoji</h3>
            </div>
          </section>

          <section className="content-grid">
            <div className="card large-card">
              <h2>Anotácia</h2>
              <p>
                Na viacerých predmetoch v našom študijnom programe používame systém na zadávanie úloh L.I.S.T., ktorý bol vyvinutý pôvodne ako bakalárska práca, neskôr na ňom autor pokračoval vo svojej diplomovej práci a potom prebiehal ďalší príležitostný vývoj. Hoci systém slúži úspešne viac ako 10 rokov, pomaly dospel do štádia, keď je vhodné vytvoriť nový - ktorý ale využije potenciál tisícov úloh a zadaní, ktoré systém obsahuje. Aktuálne prebieha vývoj novej verzie, očakáva sa jej nasadenie v prevádzke na jeseň 2025, ale časť funkcionality bude treba doplniť postupne neskôr.
              </p>
            </div>

            <div className="card side-card">
              <h2>Zdroje</h2>
              <div className="link-list">
                <button>PDF verzia bakalárskej práce</button>
                <button>Prezentácia</button>
                <button>Zdrojový kód</button>
              </div>
            </div>
          </section>

          <section className="content-grid">
            <div className="card feature-card">
              <h2>Cieľ</h2>
              <p>
                Na viacerých predmetoch v našom študijnom programe používame systém na zadávanie úloh L.I.S.T., ktorý bol vyvinutý pôvodne ako bakalárska práca, neskôr na ňom autor pokračoval vo svojej diplomovej práci a potom prebiehal ďalší príležitostný vývoj. Hoci systém slúži úspešne viac ako 10 rokov, pomaly dospel do štádia, keď je vhodné vytvoriť nový - ktorý ale využije potenciál tisícov úloh a zadaní, ktoré systém obsahuje. Aktuálne prebieha vývoj novej verzie, očakáva sa jej nasadenie v prevádzke na jeseň 2025, ale časť funkcionality bude treba doplniť postupne neskôr.
              </p>
            </div>
          </section>

          <section className="section-block card">
            <h2>Aktuálny zoznam zdrojov a odkazov</h2>
            <div className="sources-list">
              {sources.map((source) => (
                  <a
                      key={source.title}
                      href={source.link}
                      className="source-item"
                      target="_blank"
                      rel="noreferrer"
                  >
                    <div className="source-text">
                      <h3>{source.title}</h3>
                      <p>{source.type}</p>
                    </div>
                    <span className="source-arrow">→</span>
                  </a>
              ))}
            </div>
          </section>

          <section className="section-block card">
            <h2>Denník</h2>
            <div className="diary-grid">
              {diary.map((entry) => (
                  <div key={entry.date} className="diary-card">
                    <h3>{entry.date}</h3>
                    <ul>
                      {entry.tasks.map((task) => (
                          <li key={task}>{task}</li>
                      ))}
                    </ul>
                  </div>
              ))}
            </div>
          </section>
        </main>
      </div>
  )
}

export default App