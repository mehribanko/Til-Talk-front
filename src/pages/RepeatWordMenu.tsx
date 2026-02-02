import {RepeatWordCard} from "../components/card/RepeatWordCard";
import {mockData} from "../common/mockData/mockWordList";


interface  RepeatWordMenu {
    data: any;
}

export const RepeatWordMenu = () => {

    return (
        <div>
            {
                mockData.map((item) => {
                    <RepeatWordCard lang={item.lang} text={item.korean} pronunciation={item.romanization}/>
                })
            }
        </div>
    )

}