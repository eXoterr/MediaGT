export default {
    package: "mgt.example",
    title: "Example",
    init: loadStreams,
    data: []
}

async function loadStreams() {
    return [
        {
            background: "",
            title : "First",
            data : "None",
            style: "landscape",
        },
        {
            background: "",
            title : "Second",
            data : "None",
            style: "landscape",
        },
        {
            background: "",
            title : "Third",
            data : "None",
            style: "landscape",
        },
    ]
}