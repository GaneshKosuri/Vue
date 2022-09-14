const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}


const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null,
            gameLogs: []
        }
    },
    watch: {
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'player'
            }
        },
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'monster'
            }
        }
    },
    computed: {
        getMonsterHealthStyles() {
            return { width: `${this.monsterHealth > 0 ? this.monsterHealth : 0}%` }
        },
        getPlayerHealthStyles() {
            return { width: `${this.playerHealth > 0 ? this.playerHealth : 0}%` }
        },
        canUseSpecialAttack() {
            return this.currentRound % 3 !== 0
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++
            const randomDamage = getRandomValue(10, 20);
            this.monsterHealth -= randomDamage
            this.addLogMessage("Player", "attacks Monster", randomDamage)
            this.attackPlayer()
        },
        attackPlayer() {
            const randomDamage = getRandomValue(20, 25);
            this.playerHealth -= randomDamage
            this.addLogMessage("Monster", "attacks Player", randomDamage)
        },
        specialAttackMonster() {
            this.currentRound = 0
            const randomDamage = getRandomValue(20, 30);
            this.monsterHealth -= randomDamage
            this.addLogMessage("Player", "Special attacks Monster", randomDamage)
            this.attackPlayer()

        },
        healHealth() {
            this.currentRound++
            const healValue = getRandomValue(15, 20);
            if (healValue + this.playerHealth > 100) return

            this.playerHealth += healValue
            this.addLogMessage("Player", "Heal Health", healValue)
            this.attackPlayer()
        },
        surrenderToMonster() {
            this.addLogMessage("Player", "Surrender to Monster with health", this.playerHealth)
            this.winner = 'monster'
        },
        resetGame() {
            this.monsterHealth = 100
            this.playerHealth = 100
            this.winner = null
            this.currentRound = 0
            this.gameLogs = []
        },
        addLogMessage(who, what, value) {
            const messageObject = {
                actionBy: who,
                actionType: what,
                actionValue: value
            }
            this.gameLogs.unshift(messageObject)
        }
    },
})

app.mount("#game")