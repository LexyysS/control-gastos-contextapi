import { CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import { useBudget } from "../hooks/useBudget"
import AmountDisplay from "./AmountDisplay"
import 'react-circular-progressbar/dist/styles.css'

const BudgetTracker = () => {
  const {state , dispatch, remainingBudget, totalExpenses} = useBudget()
  const percentage = +((totalExpenses / state.budget) * 100).toFixed(2)
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex justify-center">
            <CircularProgressbar
              value={percentage}
              styles={buildStyles({
                pathColor:percentage === 100 ? "#22c55e" : "#3b82f6",
                trailColor: "#f5f5f5",
                textColor: percentage === 100 ? "#22c55e" : "#3b82f6",
                textSize:8
              })}
              text={`${percentage}% Gastado`}
            />
        </div>
        
        <div className="flex flex-col justify-center  items-center gap-8">
            

            <AmountDisplay label="Presupuesto" amount={state.budget} />
            <AmountDisplay label="Disponible" amount={remainingBudget} />
            <AmountDisplay label="Gastado" amount={totalExpenses} />

            <button type="button" className="bg-pink-600 hover:bg-pink-700 w-full p-2 text-white uppercase font-bold rounded-lg" 
            onClick={()=> dispatch({type: 'reset-app'})}>
                Resetear App
            </button>
        </div>

    </div>
  )
}

export default BudgetTracker
