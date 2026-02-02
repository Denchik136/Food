async function MealDetailsPage({ params }) {
    const { slug } = await params
    return (
        <main>
            <h1>Meals Details</h1>
            <p>{slug}</p>
        </main>
    )
}

export default MealDetailsPage
