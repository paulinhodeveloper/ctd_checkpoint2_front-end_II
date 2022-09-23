// Função para definir cor aleatória
let i = 0;
export const color = () => {
    const randomColor = ['#ff3de8', '#c2ff3d', '#3dc2ff', '#04e022', '#bc83e6', '#ebb328'];

    if (i > randomColor.length - 1) {
        i = 0;
    };
    return randomColor[i++];
};

// Função para definir rotação aleatória
export const rotate = () => {
    const randomRotate = ['rotate(3deg)', 'rotate(1deg)', 'rotate(-1deg)', 'rotate(-3deg)', 'rotate(-5deg)', 'rotate(-10deg)'];
    return randomRotate[Math.floor(Math.random() * randomRotate.length)];
};

// Função para definir margem aleatória
export const margin = () => {
    const randomMargin = ['-5px', '1px', '5px', '10px', '15px', '20px'];
    return randomMargin[Math.floor(Math.random() * randomMargin.length)];
};