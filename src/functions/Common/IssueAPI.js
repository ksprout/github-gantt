import { isGitHubURL } from '../GitHub/GitHubURLHelper.js';
import {
  getGitHubIssuesFromAPI,
  updateGitHubIssueFromGanttTask,
  openGitHubIssueAtBrowser,
  openGitHubNewIssueAtBrowser,
  setGitHubLabelListOfRepoFromAPI,
  setGitHubMemberListOfRepoFromAPI,
} from '../GitHub/GitHubAPI.js';
import { isValidURL } from '../Common/CommonHelper.js';

export const isGitHubAccessible = (url) => {
  return isValidURL(url) && isGitHubURL(url);
};

export const getIssuesFromAPI = async (
  git_url,
  token,
  selected_labels,
  selected_assignee
) => {
  if (isGitHubAccessible(git_url)) {
    return getGitHubIssuesFromAPI(git_url, token, selected_labels, selected_assignee);
  }
};

export const setLabelListOfRepoFromAPI = async (git_url, token) => {
  if (isGitHubAccessible(git_url)) {
    return setGitHubLabelListOfRepoFromAPI(git_url, token);
  }
};

export const setMemberListOfRepoFromAPI = async (git_url, token) => {
  if (isGitHubAccessible(git_url)) {
    return setGitHubMemberListOfRepoFromAPI(git_url, token);
  }
};

export const updateIssueByAPI = (gantt_task, token, gantt, git_url) => {
  if (isGitHubAccessible(git_url)) {
    return updateGitHubIssueFromGanttTask(gantt_task, token, gantt, git_url);
  }
};

export const openIssueAtBrowser = (gantt_task_id, git_url) => {
  if (isGitHubAccessible(git_url)) {
    openGitHubIssueAtBrowser(gantt_task_id, git_url);
  }
};

export const openNewIssueAtBrowser = (gantt_task, git_url) => {
  if (!isValidURL(git_url)) {
    return null;
  } else if (isGitHubURL(git_url)) {
    openGitHubNewIssueAtBrowser(gantt_task, git_url);
  }
};
