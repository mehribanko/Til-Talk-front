interface LevelFilterButtonsProps  {
    setWordsByLevel : () => void;
}

export const LevelFilterButtons  = ( {setWordsByLevel} : LevelFilterButtonsProps) => {

    return (
        <div>
            <button onClick={setWordsByLevel('Beginner')}>Beginner</button>
            <button onClick={setWordsByLevel('Intermediate')}>Intermediate</button>
            <button onClick={setWordsByLevel('Advanced')}>Advanced</button>
          </div>
    )
}