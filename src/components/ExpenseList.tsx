import { useBudget } from "../hooks/useBudget"
import { useMemo } from "react"
import ExpenseDetail from "./ExpenseDetail"
const ExpenseList = () => {
    const { state } = useBudget()
    const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses])
    return (
        <div className="mt-10">
            {isEmpty ? <p className="text-gray-600 text-2xl font-bold text-center">No hay gastos</p> : (
                <>
                    <p className="text-slate-800 text-2xl font-bold text-center mb-5">Listado de Gastos</p>

                    {state.expenses.map((expense) => (
                        <ExpenseDetail key={expense.id} expense={expense} />
                    ))
                    }



                </>)}
        </div>
    )
}

export default ExpenseList
