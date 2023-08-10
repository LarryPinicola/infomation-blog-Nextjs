const getPredictAge = async(name:string) => {
    const res = await fetch(`https://api.agify.io/?name=${name}`)
    return res.json()
}

const getPredictGender = async(name:string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`)
    return res.json()
}

const getPredictCountry = async(name:string) => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`)
    return res.json()
}

interface Params {
    params: {name: string}
}

export default async function ({params}:Params){

    const ageData = getPredictAge(params.name);
    const genderData = getPredictGender(params.name);
    const countryData = getPredictCountry(params.name);

    const [age, gender, country] = await Promise.all([ageData, genderData, countryData])

    // console.log(age, gender, country);
    

    return (
        <div className="bg-gradient-to-tl from-white to-green-600 flex h-screen justify-center items-center">
            <div className="bg-yellow-300 p-10 rounded-lg shadow-xl">
                <div className="flex flex-col gap-5 text-center text-gray-500 text-xl">
                <div className="">Personal Information</div> 
                <div className="">Age :{age?.age}</div>
                <div className="">Gender: {gender?.gender}</div>
                <div className="">Nationality: {country?.country[0]?.country_id}</div>
                </div>
            </div>
        </div>
    )
}