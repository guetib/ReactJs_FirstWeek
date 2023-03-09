import { useState } from "react"
import './Arrays.css'

const Arrays = () => {
    const [students, setStudents] = useState([
        'Enzo',
        'Lukas',
        'Maxime',
        'Eddine',
        'khalil',
        'Enzo'
    ]);

    const handleClick = () => {
        const studentsTemp = [...students] // Copier le tableau
        studentsTemp.pop()//Travail sur la copie (supprimer le dernier element avec la fct pop)
        setStudents(studentsTemp) //enregistrer la copie
    }

    return (
        <div className="arraysPage">
            <h1>Arrays</h1>

            <div className="studentList" >
                {
                    students.map((student, index) => (
                        <div key={index} className="student">
                            {student}
                        </div>
                    )
                    )
                }
            </div>
            <button onClick={handleClick}>Supprimer le dernier eleve </button>
        </div>
    );
};
export default Arrays