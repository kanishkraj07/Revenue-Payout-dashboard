import { Overview } from "./Overview";
import { PayoutDetails } from "./PayoutDetails";
import { TransactionsCount } from "./TransactionsCount";

export function PayoutContent () {
    return <div>
        <Overview />
        <div className="pl-5 md:p-0">
            <TransactionsCount />
            <PayoutDetails></PayoutDetails>
        </div>
    </div>
}