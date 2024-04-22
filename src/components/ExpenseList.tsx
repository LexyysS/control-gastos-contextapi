import { useBudget } from "../hooks/useBudget"
import { useMemo } from "react"
import ExpenseDetail from "./ExpenseDetail"
const ExpenseList = () => {
    const { state } = useBudget()
    

    const filteredExpenses = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory) : state.expenses
    const isEmpty = useMemo(() => filteredExpenses.length === 0, [filteredExpenses])

    return (
        <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
            {isEmpty ? <p className="text-gray-600 text-2xl font-bold text-center">No hay gastos</p> : (
                <>
                    <p className="text-slate-800 text-2xl font-bold text-center mb-5">Listado de Gastos</p>

                    {filteredExpenses.map((expense) => (
                        <ExpenseDetail key={expense.id} expense={expense} />
                    ))
                    }



                </>)}
        </div>
    )
}

export default ExpenseList
