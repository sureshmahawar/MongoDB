db.contacts.find({ $where: "Array.isArray(this.contacts)" })