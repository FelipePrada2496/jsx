import imagen from './assets/imagen.jpg'
import './html.css'

function App() {
  return (
    <>
      <section className='contenedor'>
        <header>
            <h1 className='title'>
                Why Every Leader Needs to Worry About Toxic Culture
            </h1>
        </header>

        <article>
            <p>
                Pinpointing the elements of toxic culture in an organization can help leaders focus on addressing the issues that lead employees to disengage and quit.
            </p>
            <div >
              <img src={imagen} alt="Imagen de fondo" className='imagen'/>
            </div>
        </article>

        <article>
            <p>
                Toxic culture, as we reported in a recent article, was the single best predictor of attrition during the first six months of the Great Resignation — 10 times more powerful than how employees viewed their compensation in predicting employee turnover.1 
                The link between toxicity and attrition is not new: By one estimate, employee turnover triggered by a toxic culture cost U.S. employers nearly $50 billion per year before the Great Resignation began.2
            </p>
            <p>
                While most everyone agrees that toxic workplaces are bad news, there is much less consensus on what makes a culture toxic as opposed to merely annoying. Scholars have proposed multiple, sometimes conflicting definitions of toxic culture, and a quick review of blog posts and managerial articles surfaces dozens of warning signals of toxic culture with little overlap across them.3 In Glassdoor reviews, 
                employees criticize their corporate cultures for hundreds of flaws — including risk aversion, excess bureaucracy, insularity, and an impersonal feel, to mention just a few.
            </p>
        </article>
        <footer>
          You must sign in to post a comment.

          First time here? Sign up for a free account: Comment on articles and get access to many more articles.
        </footer>
    </section>
    
    </>
  )
}

export default App
