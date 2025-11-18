export const turboLogger = (mensagem, textColor = "blue") => {
    const textStyle = `color: ${textColor}`;
    console.log(`%c${mensagem}`, textStyle);
}