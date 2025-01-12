import { useState } from "react"

function MaahMaah() {

    const qoutes = [
        "1. Aqoon La'aan Waa iftiin la'aan",
        "2. Gamco Wadajir Bey Wax ku gooyaan",
        "3. Far kaligeed fool ma dhaqdo",
        "4. Afdaboolan waa dahab",
        "5. Nin geed kali jiray geed looma galo",
        "6. Nin tuur leh siduu u seexdo asigaa yaqaano",
        "7. inta aa dan falin ka fiirso",
        "8, Aar qoyey dacwo lamood",
        "9. Nin seexday siciisa dibi dhalay",
        "10. Qunyar socod Qodax ma mudo"
    ]

    const [index, setIndex] = useState(0)

    const handleNext = () => {
        if (index < qoutes.length - 1) {
            setIndex(index + 1)
        }

    }

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }

    return <>
        <div className="mt-40  sm:ml-96">
            <p style={{display: index === qoutes.length-1 ? "block" : "none"}} className="text-5xl text-red-500 sm:pl-32 pl-20 font-bold pb-10 hidden">Dhamaad</p>
            <h1 style={{color: index === 3 ? "red" : ""}} className="sm:text-4xl px-10 sm:px-0 text-2xl font-bold">{qoutes[index]}</h1>
            <button onClick={handlePrev} className="bg-blue-500 px-8 py-2 text-xl text-white rounded-lg sm:ml-20 ml-10">Prev</button>
            <button onClick={handleNext} className="bg-blue-500 px-8 py-2 text-xl text-white rounded-lg mt-10 ml-20">Next</button>
        </div>
    </>
}

export default MaahMaah