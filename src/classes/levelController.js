//Controls everything to do with levels
import levelData from '../dictionaries/levels.js'

import Level from './level.js'

class LevelController {
    constructor(){

        this.levelsList = levelData.map(l => new Level(l))

        this.levelNodes = this.parseStructure()

        this.currentLevel = 1

        this.print()
    }

    getLevels() {
        return 
    }

    getLevelById(id) {
        return this.levelsList.filter(l => l.id === id)[0]
    }

    getLevel() {
        return this.getLevelById(this.currentLevel)
    }

    getLevelNode() {
        let ret = {}

        this.levelNodes.word.map( (n) => {
            if(n.id === this.currentLevel) {
                ret = n
            }
        })

        return 
    }

    searchChildren(node) {
        children.map
    }

    selectLevel(e) {
        game.levelController.currentLevel = Number.parseInt(e.target.getAttribute('data-id'))
        game.levelController.print()
    }


    parseStructure() {

        let categories = ['word', 'math', 'logic']

        //separate into categories
        let catStruct = categories.map(c => this.levelsList.filter(l => l.category === c))

        let ret = {}

        catStruct = catStruct.map(levelList => {

            if (levelList.length === 0) return

            console.log(levelList)

            let first = levelList.filter(l => l.previous === null)[0]

            first.parse(levelList)

            ret[first.category] = first
        })

        return ret
    }

    checkLevel(output) {
        let cl = this.getLevel().output

        //First check the length for an easy tell
        let check = output.length === cl.length
        //Then check each one
        if (check) {
            output.forEach((o, i) => o == cl[i] ? "" : check = false)
        }
        if (check) {
            this.completeLevel()

            //flash the level green, just a little flair
            let levelElem = document.getElementById('level')
            levelElem.style.backgroundColor = '#9f9'
            window.setTimeout(() => { 
                levelElem.style.backgroundColor = '#fff' 
            }, 500)
        }
        return check
    }

    completeLevel() {
        this.print()
        let level = this.getLevel()

        level.progress.completed = true

        this.levelsList.filter( l => l.previous === level.id ).map( l => l.progress.unlocked = true )

    }

    print() {
        let levelSelectElem = document.getElementById('level-select')

        console.log(this.levelNodes)
        levelSelectElem.innerHTML = this.levelNodes.word.print()
        
        let levelElem = document.getElementById('level')
        levelElem.innerHTML = ""

        let levelInfoElem = document.getElementById('level-help')
        levelInfoElem.innerHTML = ""

        let level = this.getLevel()

        level.output.forEach((r) => levelElem.innerHTML += `<div>${r}</div>`)

        levelInfoElem.innerHTML = `<div>
            <h5>${level.text.name}</h5>
            <p>${level.text.description}</p>
            <br />
            <p>Hints</p>
            ${ level.text.hints?.map((a, i) => `<p>-${a}</p>`).join("")}
        </div>`

        let levelChoices = document.querySelectorAll('.level-select-choice')
        levelChoices.forEach( button => {
            button.addEventListener('click', this.selectLevel)
        })
    }
  
}

export default LevelController