import {SkipButton} from "../button/SkipButton";
import {getCardStyle} from "../../common/util/commonUtils";
import {Card} from "./Card";
import {LearnButton} from "../button/LearnButton";


export const LearnWordCard = () => {

    return (
        <div>
            {/* Card */}
            <div className="transition-all duration-300 ease-out  mx-12" style={getCardStyle(tilt)}>
                <Card lang={lang} text={text} pronunciation={pronunciation} onFlip={onFlip}/>
            </div>

            {/* I learn button */}
            <LearnButton setTilt={setTilt} />
        </div>
    )
}