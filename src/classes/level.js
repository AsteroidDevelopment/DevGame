class Level {
    constructor({ id, kind, category, output, previous, requirements, unlockAt, unlockAfter, spellsAvailable, runesAvailable, text }) {
        this.id = id
        this.kind = kind
        this.category = category
        this.output = output
        this.previous = previous
        this.requirements = requirements
        this.unlockAt = unlockAt
        this.unlockAfter = unlockAfter
        this.spellsAvailable = spellsAvailable
        this.runesAvailable = runesAvailable
        this.text = text

        this.progress = {
            unlocked: !this.previous,
            completed: false,
            bestScore: false,

        }
    }

    

    parse(levelList) {
        let children = levelList.filter(l => l.previous === this.id)
        this.children = children

        this.children.map(l => {
            if (l) { l.parse(levelList) }
        })
    }

    print() {
        let levelChallenges = this.children?.filter(l => l.kind === 'challenge')
        let levelNext = this.children?.filter(l => l.kind === 'normal' || l.kind === 'boss')[0]
        let levelBasic = this.children?.filter(l => l.kind === 'basic')

        return `<div>
            <div class="row level-select-row">
            
                <div class='next col-6'>
                    <div class="row">${levelNext?.print()}</div>
                    <div class="row">
                        <div class='main col-6'>
                            <div>
                                ${this.display()}
                            </div>
                        </div>
                        <div class='${this.kind === 'boss' ? '' : 'basic'} col-6'>
                            ${levelBasic?.map((a, i) => `${a.display()}`).join("")}
                        </div>
                    </div>
                </div>

                <div class='${this.kind === 'boss' ? '' : 'challenges'} col-6'>
                    <div>
                    ${levelChallenges?.map((a) => `${a.display()}`).join("")}
                    </div>
                </div>

            </div>

        </div>`

    }

    display() {
        
        return `<div data-id=${this.id} 
            class="level-select-choice ${this.kind} 
            ${this.progress.unlocked ? 'unlocked' : 'locked'} 
            ${this.progress.completed ? 'completed' : ''} ">

            ${this.id}
        </div>`
    }

}

export default Level
