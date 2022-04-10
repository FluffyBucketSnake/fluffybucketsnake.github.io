import { access } from "fs/promises";
import { constants } from "fs";

export async function searchFilepathWithExtensions(
  filepathWithoutExtension: string,
  extensions: string[]
): Promise<string | undefined> {
  for (const ext of extensions) {
    const filepath = filepathWithoutExtension + ext;
    try {
      await access(filepath, constants.R_OK);
      return filepath;
    } catch (err) {}
  }
}
