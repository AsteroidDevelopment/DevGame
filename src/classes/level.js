import levelData from '../dictionaries/levels.js'

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
            unlocked: false,
            beaten: false,
            beatenLines: false,

        }
    }

    static getLevels() {
        return levelData.map(l => new Level(l))
    }

    static getLevelById(levels, id) {
        return levels.filter(l => l.id === id)[0]
    }

    static parseStructure(levels) {

        let categories = ['word', 'math', 'logic']

        //separate into categories
        let catStruct = categories.map(c => levels.filter(l => l.category === c))

        catStruct.forEach(levelList => {

            if (levelList.length === 0) return

            console.log(levelList)

            let first = levelList.filter(l => l.previous === null)[0]

            first.parse(levelList)

            console.log(first)

            let levelSelectElem = document.getElementById('level-select')

            levelSelectElem.innerHTML = first.print()

        })
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
        return `<div class="level-select-choice ${this.kind}">
            ${this.id}
        </div>`
    }

}

export default Level
