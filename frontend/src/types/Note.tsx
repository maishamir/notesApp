export type Note = {
  /**
   * What the user titles the note OR the first few words
   */
  title: string;
  /**
   * The content of the note
   */
  content: string;
  /**
   * Date created/modified
   */
  timestamp: string;
  id: string
};
