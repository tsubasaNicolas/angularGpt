import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ChatMessageComponent,
  MyMessageComponent,
  TypingLoaderComponent,
  TextMessageBoxComponent,
} from '@components/index';
import { Message } from '@interfaces/message.interface';
import { OpenAiService } from 'app/presentation/services/openai.service';

@Component({
  selector: 'app-assistant-page',
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    ReactiveFormsModule,
    TextMessageBoxComponent,
  ],
  templateUrl: './assistantPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AssistantPageComponent {
  public messages = signal<Message[]>([]);
  public isloading = signal(false);
  public openAiService = inject(OpenAiService);

  public previousResponseId = signal<string | undefined>(
    localStorage.getItem('responseId') || undefined
  );

  handleMessage(question: string) {
    this.isloading.set(true);
    this.messages.update((prev) => [...prev, { text: question, isGpt: false }]);

    this.openAiService
      .postQuestion(question, this.previousResponseId())
      .subscribe((result) => {
        this.isloading.set(false);
        this.previousResponseId.set(result.responseId);
        localStorage.setItem('responseId', result.responseId);

        this.messages.update((prev) => [
          ...prev,
          { text: result.text, isGpt: true },
        ]);
      });
  }
}