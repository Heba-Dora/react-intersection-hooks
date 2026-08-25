import { renderHook } from '@testing-library/react';
import { useIntersectionObserver } from '../useIntersectionObserver';

describe('useIntersectionObserver', () => {
  let mockObserve: jest.Mock;
  let mockDisconnect: jest.Mock;

  beforeEach(() => {
    mockObserve = jest.fn();
    mockDisconnect = jest.fn();
    
    // Mock the global IntersectionObserver
    window.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: mockObserve,
      unobserve: jest.fn(),
      disconnect: mockDisconnect,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize correctly and return a ref setter', () => {
    const { result } = renderHook(() => useIntersectionObserver());
    
    const [setNode, entry] = result.current;
    
    expect(typeof setNode).toBe('function');
    expect(entry).toBeUndefined();
  });

  it('should be safe to use in SSR environments without window', () => {
    const originalWindow = global.window;
    // @ts-ignore
    delete global.window;
    
    expect(() => {
      renderHook(() => useIntersectionObserver());
    }).not.toThrow();
    
    global.window = originalWindow;
  });
});
