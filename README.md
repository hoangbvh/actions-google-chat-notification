<!-- [![Test](https://github.com/hoangbvh/action-google-chat/actions/workflows/test.yml/badge.svg?branch=v1.0.0)](https://github.com/hoangbvh/action-google-chat/actions/workflows/test.yml) -->

# Google Chat Notification for GitHub Actions

Sends a Google Chat notifications.

<!-- ![Success](images/success.png "Success") -->

## Usage
### Parameters
|Name|Required|Description|
|:---:|:---:|:---|
|name|true|Job name. Used for notification titles.|
|url|true|Google Chat Webhook URL.|
|status|true|Job status. Available values are `success`, `failure`, `cancelled`, `in-progress`. We recommend using `${{ job.status }}` or `${{ steps..outcome/conclusion }}` |
|custom_text|false|Custom text to show in message. Supports HTML tags.|

### Examples
```yaml
- name: google-chat-notification
  uses: hoangbvh/actions-google-chat-notification@v1.0.0
  with:
    name: Build
    url: ${{ secrets.GOOGLE_CHAT_WEBHOOK }}
    status: ${{ job.status }}
    custom_text: 'Your custom message.'
  if: always()
```





![GitHub issues](https://img.shields.io/github/issues/hoangbvh/action-google-chat)

[Issues page](https://github.com/hoangbvh/action-google-chat/issues)
