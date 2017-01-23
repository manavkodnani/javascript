function getShortMessages(messages) {
    var filteredMessages = [];
    filteredMessages = messages.filter(messagesToFilter);
    var mappedMessages = filteredMessages.map(mapMessages);
    return mappedMessages;
}

function messagesToFilter(messages) {
    return messages.message.length < 50;
}

function mapMessages(messages) {
    return messages.message;
}

module.exports = getShortMessages