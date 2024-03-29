export const PAGINATION_MOCK = {
    first: { classes: 'is-disabled', text: 'First', anchor: { href: '/first' } },
    prev: { classes: 'is-disabled', anchor: { payload: 'prev' } },
    next: { text: 'Next', anchor: { href: '/next' } },
    last: { text: 'Last', anchor: { payload: 'last' } },
    links: [
        { text: '1', classes: 'is-active', anchor: { href: '/link-1', target: '_blank' } },
        { text: '2', anchor: { payload: 'page 2' } },
        { text: '3', anchor: { payload: 'page 3' } },
        { text: '4', anchor: { payload: 'page 4' } },
        { text: '5', anchor: { payload: 'page 5' } },
    ],
    select: {
        label: 'Numero di risultati',
        options: [
            { text: '10' },
            { text: '25', selected: true },
            { text: '50', disabled: true },
        ],
        payload: 'select',
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5tb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBbUI7SUFDN0MsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRTtJQUM1RSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUM3RCxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUNqRCxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUNuRCxLQUFLLEVBQUU7UUFDTCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRTtRQUNsRixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO1FBQzVDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUU7UUFDNUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRTtRQUM1QyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO0tBQzdDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sS0FBSyxFQUFFLHFCQUFxQjtRQUM1QixPQUFPLEVBQUU7WUFDUCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDZCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtZQUM5QixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtTQUMvQjtRQUNELE9BQU8sRUFBRSxRQUFRO0tBQ2xCO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2luYXRpb25EYXRhIH0gZnJvbSAnLi9wYWdpbmF0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBQQUdJTkFUSU9OX01PQ0s6IFBhZ2luYXRpb25EYXRhID0ge1xyXG4gIGZpcnN0OiB7IGNsYXNzZXM6ICdpcy1kaXNhYmxlZCcsIHRleHQ6ICdGaXJzdCcsIGFuY2hvcjogeyBocmVmOiAnL2ZpcnN0JyB9IH0sXHJcbiAgcHJldjogeyBjbGFzc2VzOiAnaXMtZGlzYWJsZWQnLCBhbmNob3I6IHsgcGF5bG9hZDogJ3ByZXYnIH0gfSxcclxuICBuZXh0OiB7IHRleHQ6ICdOZXh0JywgYW5jaG9yOiB7IGhyZWY6ICcvbmV4dCcgfSB9LFxyXG4gIGxhc3Q6IHsgdGV4dDogJ0xhc3QnLCBhbmNob3I6IHsgcGF5bG9hZDogJ2xhc3QnIH0gfSxcclxuICBsaW5rczogW1xyXG4gICAgeyB0ZXh0OiAnMScsIGNsYXNzZXM6ICdpcy1hY3RpdmUnLCBhbmNob3I6IHsgaHJlZjogJy9saW5rLTEnLCB0YXJnZXQ6ICdfYmxhbmsnIH0gfSxcclxuICAgIHsgdGV4dDogJzInLCBhbmNob3I6IHsgcGF5bG9hZDogJ3BhZ2UgMicgfSB9LFxyXG4gICAgeyB0ZXh0OiAnMycsIGFuY2hvcjogeyBwYXlsb2FkOiAncGFnZSAzJyB9IH0sXHJcbiAgICB7IHRleHQ6ICc0JywgYW5jaG9yOiB7IHBheWxvYWQ6ICdwYWdlIDQnIH0gfSxcclxuICAgIHsgdGV4dDogJzUnLCBhbmNob3I6IHsgcGF5bG9hZDogJ3BhZ2UgNScgfSB9LFxyXG4gIF0sXHJcbiAgc2VsZWN0OiB7XHJcbiAgICBsYWJlbDogJ051bWVybyBkaSByaXN1bHRhdGknLFxyXG4gICAgb3B0aW9uczogW1xyXG4gICAgICB7IHRleHQ6ICcxMCcgfSxcclxuICAgICAgeyB0ZXh0OiAnMjUnLCBzZWxlY3RlZDogdHJ1ZSB9LFxyXG4gICAgICB7IHRleHQ6ICc1MCcsIGRpc2FibGVkOiB0cnVlIH0sXHJcbiAgICBdLFxyXG4gICAgcGF5bG9hZDogJ3NlbGVjdCcsXHJcbiAgfVxyXG59O1xyXG4iXX0=