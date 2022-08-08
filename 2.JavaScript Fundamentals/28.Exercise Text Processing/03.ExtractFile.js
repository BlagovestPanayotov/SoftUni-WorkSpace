function extractFile(input) {

    let fileDirectory = input.split("\\");
    let fileInfo = fileDirectory[fileDirectory.length - 1].split(".");
    let fileExt = fileInfo.pop();
    let fileName = fileInfo.join(".");

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);

}