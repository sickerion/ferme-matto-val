class Tab {
  constructor(title, content) {
    this.id = Math.random().toString(36).substring(7);
    this.title = title;
    this.content = content;
  }
}

export default Tab;