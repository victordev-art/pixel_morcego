const canvas = document.getElementById('tela')
const ctx = canvas.getContext('2d')

const CORES = {
    1: '#2a0050',
    2: '#7b3fff',
    3: '#ffaaff',
}

const frames = [
    // Frame 0 — asas para CIMA
    [
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,2,2,0,0,0,0,0,0,2,2,0],
        [2,2,2,2,0,0,0,0,2,2,2,2],
        [2,2,2,2,2,0,0,2,2,2,2,2],
        [0,2,1,1,2,2,2,2,1,1,2,0],
        [0,0,1,3,1,1,1,1,3,1,0,0],
        [0,0,0,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,1,0,0,1,0,0,0,0],
    ],
    // Frame 1 — asas no MEIO
    [
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,2,2,0,0,0,0,0,0,2,2,0],
        [2,2,2,2,1,1,1,1,2,2,2,2],
        [0,2,1,1,2,2,2,2,1,1,2,0],
        [0,0,1,3,1,1,1,1,3,1,0,0],
        [0,0,0,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,1,0,0,1,0,0,0,0],
    ],
    // Frame 2 — asas para BAIXO
    [
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,1,0,0,0,0],
        [0,0,1,1,2,2,2,2,1,1,0,0],
        [0,2,1,2,2,2,2,2,2,1,2,0],
        [2,2,1,3,1,1,1,1,3,1,2,2],
        [2,2,2,1,1,1,1,1,1,2,2,2],
        [0,2,2,0,1,0,0,1,0,2,2,0],
    ],
]

let frameAtual = 0

function desenhar() {
    // Limpa a tela antes de desenhar
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const frame = frames[frameAtual]
    const offsetX = (canvas.width  - 12 * 8) / 2
    const offsetY = (canvas.height - 8  * 8) / 2

    for (let linha = 0; linha < 8; linha++) {
        for (let coluna = 0; coluna < 12; coluna++) {
            const valor = frame[linha][coluna]
            if (valor === 0) continue

            ctx.fillStyle = CORES[valor]
            ctx.fillRect(coluna * 8 + offsetX, linha * 8 + offsetY, 8, 8)
        }
    }

    // Avança pro próximo frame
    frameAtual = (frameAtual + 1) % frames.length
}

desenhar()
setInterval(desenhar, 150)