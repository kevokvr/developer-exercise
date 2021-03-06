// Kevin Valenzuela
import React from 'react'

function Totals(props){
    let totalRevenue = props.oneTimeRevenue + (props.monthlyRevenue * 24)
    let totalExpense = props.oneTimeExpense + (props.monthlyExpense * 24)
    let monthlyContributionProfit = props.monthlyRevenue - props.monthlyExpense
    let totalContributionProfit = totalRevenue - totalExpense
    // handle case where totalRevenue is 0 (to avoid -Infinity and NaN)
    let contributionMargin = totalRevenue !== 0 ? (totalContributionProfit / totalRevenue * 100).toFixed(0) : 0
    // handle case where totalExpense and totalRevenue are 0 (to avoid NaN)
    let capitalROI = (totalExpense === 0 && totalRevenue === 0) ? 0 : ((props.oneTimeExpense - props.oneTimeRevenue) / monthlyContributionProfit).toFixed(1)
    return (
        <div>
            {/* Totals Table from lines 270-312 from original App.js */}
            <table className="totals-table">
                <thead>
                <tr>
                    <th></th>
                    <th>One-Time</th>
                    <th>Monthly</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Revenue</td>
                    <td>${(props.oneTimeRevenue).toFixed(2)}</td>
                    <td>${(props.monthlyRevenue).toFixed(2)}</td>
                    <td>${totalRevenue.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Expenses</td>
                    <td>${(props.oneTimeExpense).toFixed(2)}</td>
                    <td>${(props.monthlyExpense).toFixed(2)}</td>
                    <td>${totalExpense.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Contribution Profit</td>
                    <td></td>
                    <td>${ monthlyContributionProfit.toFixed(2)}</td>
                    <td>${ totalContributionProfit.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Contribution Margin</td>
                    <td></td>
                    <td></td>
                    <td>{contributionMargin}%</td>
                </tr>
                <tr>
                    <td>Capital ROI (monthly)</td>
                    <td></td>
                    <td></td>
                    <td>{capitalROI}</td>
                </tr>
                </tbody>
            </table>
        </div>

    )
}
export default Totals;