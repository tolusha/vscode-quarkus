'use strict';



import * as vscode from 'vscode';
import { createQuarkusProject } from './createQuarkusProject';

export interface QuickPickItemWithValue extends vscode.QuickPickItem {
  value: string;
}

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('quarkusTools.createMavenProject', () => {
    createQuarkusProject();
  });
  context.subscriptions.push(disposable);
}

export function deactivate() { }