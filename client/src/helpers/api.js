export const getTechnologies = async () => {
    try {
        const response = await fetch('/api/technologies')
        const technolgies = await response.json()
        return technolgies
    } catch (error) {
        return error
    }

}