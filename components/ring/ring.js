

export default function Ring() {


  return (
    <div className="full">
        <main className="Loop jsLoop">
        <section className="section one">
          <h1 className="h1">One</h1>
        </section>
        <section className="section two">
          <h1 className="h1">For</h1>
        </section>
        <section className="section three">
          <h1 className="h1">All</h1>
        </section>
        <section className="section four">
          <h1 className="h1">And</h1>
        </section>
        <section className="section three">
          <h1 className="h1">All</h1>
        </section>
        <section className="section two">
          <h1 className="h1">For</h1>
        </section>

        {/* fake blocks */}
        <section className="section one isCLone">
          <h1 className="h1">One</h1>
        </section>
        <section className="section two isCLone">
          <h1 className="h1">For</h1>
        </section>
      </main>
    </div>
  )
}
