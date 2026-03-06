import type {WordLevel} from "../../types/WordTypes.tsx";

interface LevelFilterButtonsProps  {
    onLevelFilterCLick : (level: WordLevel) => void;
}

export const LevelFilterButtons  = ( {onLevelFilterCLick} : LevelFilterButtonsProps) => {

    return (
        <div>
            <button onClick={() => onLevelFilterCLick('Beginner')}>Beginner</button>
            <button onClick={() => onLevelFilterCLick('Intermediate')}>Intermediate</button>
            <button onClick={() => onLevelFilterCLick('Advanced')}>Advanced</button>
          </div>
    )
}