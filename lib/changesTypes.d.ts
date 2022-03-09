import { components } from "@octokit/openapi-types";

export type Commit = components["schemas"]["commit"]

export type ChangeProps = {
    commit: Commit
}

export type Commits = Commit[];

export type ChangesProps = {
    commits: Commits | undefined;
}